# What is Virtualization?

Virtualization is a technology that allows you to create a virtual version of computing resources such as hardware, operating systems, storage, or networks.


---

## Virtualization in OS 

In an Operating System context, virtualization allows multiple operating systems (called guest OSes) to run on a single physical machine (host machine) by using a special layer called a hypervisor.


---

## components of Virtualization 
- Physical Machine (Host): The actual hardware (CPU, RAM, storage, etc.).


- Hypervisor (Virtualization Layer):

A software that sits between hardware and OS.

It creates and manages virtual machines (VMs).



- Virtual Machines (VMs):

Each VM has its own virtual CPU, memory, storage, and network interface.

You can install a different operating system in each VM (e.g., Linux and Windows running together).

- Types of Hypervisors:


  - Type 1 (Bare-metal)	Runs directly on hardware	VMware ESXi, Microsoft Hyper-V
  - Type 2 (Hosted)	Runs on top of an existing OS	VirtualBox, VMware Workstation


## Uses Virtualization in OS :

Run multiple OSes on one machine

Isolate development/testing environments

Better hardware utilization

Easy backup and recovery

Fast deployment in cloud and data centers



---

## Example:

- A developer runs Ubuntu Linux inside Windows 10 using VirtualBox.

- Cloud services like AWS use virtualization to provide on-demand virtual servers (EC2 instances).


