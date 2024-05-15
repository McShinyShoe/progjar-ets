from socket import *
import socket
import time
import sys
import logging
import multiprocessing
import os
from http import HttpServer

httpserver = HttpServer()


class ProcessTheClient(multiprocessing.Process):
	def __init__(self, connection, address):
		self.connection = connection
		self.address = address
		multiprocessing.Process.__init__(self)

	def run(self):
		rcv=""
		while True:
			try:
				data = self.connection.recv(32)
				if data:
					#merubah input dari socket (berupa bytes) ke dalam string
					#agar bisa mendeteksi \r\n
					d = data.decode()
					rcv=rcv+d
					if rcv[-2:]=='\r\n':
						#end of command, proses string
						#logging.warning("data dari client: {}" . format(rcv))
						hasil = httpserver.proses(rcv)
						#hasil akan berupa bytes
						#untuk bisa ditambahi dengan string, maka string harus di encode
						hasil=hasil+"\r\n\r\n".encode()
						#logging.warning("balas ke  client: {}" . format(hasil))
						#hasil sudah dalam bentuk bytes
						self.connection.sendall(hasil)
						rcv=""
						break
				else:
					break
			except OSError as e:
				pass
		self.connection.close()


class Server(multiprocessing.Process):
	def __init__(self):
		self.the_clients = []
		self.my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
		self.my_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
		multiprocessing.Process.__init__(self)

	def run(self):
		self.my_socket.bind(('0.0.0.0', 8889))
		self.my_socket.listen(1)
		i = 0
		while True:
			connection, client_address = self.my_socket.accept()
			logging.warning("connection from {}".format(client_address))

			clt = ProcessTheClient(connection, client_address)
			clt.start()
			clt.connection.close()
			self.the_clients.append(clt)
			print("Running {} with {} clients running".format(i, len(self.the_clients)))

			for proc in self.the_clients:
				if not proc.is_alive():
					self.the_clients.remove(proc)
			i += 1


def main():
	svr = Server()
	svr.start()

if __name__=="__main__":
	main()

