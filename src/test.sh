# testing using ab

mkdir -p  test/result/ab/http/thread
for i in 10 50 100 150 200; do
    python src/server_thread_http.py &
    sleep 1
    ab -n 1000 -c $i localhost:8889/testing.txt > test/result/ab/http/thread/TestResult-$i.txt
    pkill python
done

mkdir -p  test/result/ab/http/process
for i in 10 50 100 150 200; do
    python src/server_process_http.py &
    sleep 1
    ab -n 1000 -c $i localhost:8889/testing.txt > test/result/ab/http/process/TestResult-$i.txt
    pkill python
done

testing using jmeter

mkdir -p  test/result/jmeter/http/thread
for i in 10 50 100 150 200; do
    python src/server_thread_http.py &
    sleep 1
    jmeter -n -t test/plans/http/TestPlan-$i.jmx  -l test/result/jmeter/http/thread/TestResult-$i.jmx -j test/result/jmeter/http/thread/TestLog-$i.log -e -o test/result/jmeter/http/thread/TestOutput-$i
    pkill python
done

mkdir -p  test/result/jmeter/http/process
for i in 10 50 100 150 200; do
    python src/server_process_http.py &
    sleep 1
    jmeter -n -t test/plans/http/TestPlan-$i.jmx  -l test/result/jmeter/http/process/TestResult-$i.jmx -j test/result/jmeter/http/process/TestLog-$i.log -e -o test/result/jmeter/http/process/TestOutput-$i
    pkill python
done

mkdir -p  test/result/jmeter/https/thread
for i in 10 50 100 150 200; do
    python src/server_thread_http_secure.py &
    sleep 1
    jmeter -n -t test/plans/https/TestPlan-$i.jmx  -l test/result/jmeter/https/thread/TestResult-$i.jmx -j test/result/jmeter/https/thread/TestLog-$i.log -e -o test/result/jmeter/https/thread/TestOutput-$i
    pkill python
done

mkdir -p  test/result/jmeter/https/process
for i in 10 50 100 150 200; do
    python src/server_process_http_secure.py &
    sleep 1
    jmeter -n -t test/plans/https/TestPlan-$i.jmx  -l test/result/jmeter/https/process/TestResult-$i.jmx -j test/result/jmeter/https/process/TestLog-$i.log -e -o test/result/jmeter/https/process/TestOutput-$i
    pkill python
done