# Day 2 

### git and git hub tutorials in hindi basics - understood basics from jatish chawla 

## Program 
is a set of instructions written in a programming language that tells the computer what to do. It is a passive entity stored on disk (like .exe, .out, or .py files) that does nothing until it is executed.

## process 
A process is a program in execution. It is an active unit that the operating system manages. When you run a program, the operating system loads it into memory, assigns it resources (like CPU time and RAM), and begins its execution — this running instance is called a process.

- Each process has:

1. Its own memory space

2. A unique process ID (PID)

3. A current state (like running, waiting, or terminated)

## task 
A task in an operating system refers to a unit of work or activity that the system performs. It is often used as another word for a process or thread, depending on the context. A task can be a program being executed, a part of a program, or a specific job assigned by the OS.

### Key Characteristics:
1. A task can be:

  - A process (entire program running)

  - A thread (a smaller unit within a process)

2. The OS keeps track of all tasks using a task scheduler.

3. Each task can be in one of several states: Running, Ready, Waiting, or Terminated.

## Sub task 
A subtask is a smaller unit of work that is part of a larger task or process in an operating system. It breaks down a complex task into simpler, manageable parts that can be executed individually — sometimes even in parallel.

## Thread 
A thread is the smallest unit of execution within a process. It represents a single sequence of instructions that the CPU can execute.

While a process is an independent unit with its own memory and resources, a thread is a lightweight part of a process — multiple threads within the same process share the same memory but can run independently.

## Multi threading VS Parallel processing VS Multi processing VS Multi tasking 
### 1. Multithreading
- What it is:
  - Multithreading means executing multiple threads within the same process.

  - Threads share memory and resources of the parent process.

  - It allows tasks to run concurrently (not necessarily in true parallel).

- Features:
  - Efficient use of CPU when threads are I/O bound.

  - Threads run independently but share the same data space.

  - Faster context switching than processes.

- Example:
  - A web browser :

  - One thread loads content,

  - Another handles user input,

  - Another plays a video — all within the same browser process.

### 2. Parallel Processing
- What it is:
  - Two or more tasks (processes or threads) are executed simultaneously on multiple CPUs or cores.

  - True parallelism needs multi-core processors.

- Features:
  - Best for CPU-intensive tasks (like scientific computing).

  - Involves multiple cores or processors working together.

  - Can use threads (multithreading) or processes (multiprocessing).

- Example:
  - A video rendering application using all 4 cores of your CPU to process different parts of the video at the same time.

### 3. Multiprocessing
- What it is:
  - Running multiple independent processes at the same time.

  - Each process has its own memory space.

  - Usually takes advantage of multiple CPUs or cores.

- Features:
  - Processes do not share memory by default.

  - Safer and more isolated than threads.

  - Ideal for CPU-bound tasks or when processes shouldn’t interfere with each other.

- Example:
  - Your computer is:

  - Running a browser,

  - Playing music,

  - Doing virus scanning — all as separate processes.

### 4. Multitasking
- What it is:
  - The ability of the OS to run multiple tasks (processes) seemingly at the same time.

  - Actually, the CPU switches quickly between tasks — called time-sharing.

  - Can be implemented using multiprocessing or multithreading.

- Features:
  - Makes system feel responsive.

  - Involves task switching, not always true parallel execution.

  - Present in all modern operating systems.

- Example:
  - Typing a document in Word while downloading a file and listening to music — even if you have one CPU, the OS switches between tasks rapidly.




