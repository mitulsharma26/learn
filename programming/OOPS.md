

# What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of "objects". Objects contain both data (attributes) and functions (methods).

---

##  Core Concepts of OOP

| Concept           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| **Class**         | Blueprint of an object                                   |
| **Object**        | Instance of a class                                      |
| **Encapsulation** | Binding data and methods together                        |
| **Abstraction**   | Hiding internal details, showing only essential features |
| **Inheritance**   | Acquiring properties from another class                  |
| **Polymorphism**  | Performing a single action in different ways             |

---

## Class and Object
* A **class** is a user-defined data type that holds data members and member functions.
* An **object** is an instance of a class.

### Code Example:

```cpp
#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int year;

    void display() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }
};

int main() {
    Car c1;
    c1.brand = "Toyota";
    c1.year = 2020;
    c1.display();
    return 0;
}
```

---

## Encapsulation
Encapsulation is the concept of wrapping data and methods that operate on the data into a single unit (class). It restricts direct access to some of the object’s components.

### Code Example:

```cpp
#include <iostream>
using namespace std;

class Employee {
private:
    int salary;  // private variable

public:
    void setSalary(int s) {
        salary = s;
    }

    int getSalary() {
        return salary;
    }
};

int main() {
    Employee emp;
    emp.setSalary(50000);
    cout << "Salary: " << emp.getSalary();
    return 0;
}
```

---

## Abstraction
Abstraction means showing only essential features and hiding the background details. It is achieved using **abstract classes** or **interfaces** (pure virtual functions in C++).

### Code Example:

```cpp
#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

int main() {
    Shape* s = new Circle();
    s->draw();
    delete s;
    return 0;
}
```

---

## Inheritance
Inheritance allows a class (child/derived) to inherit properties and behavior (methods) from another class (parent/base).

### Code Example:

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

int main() {
    Dog d;
    d.eat();
    d.bark();
    return 0;
}
```

---

## Polymorphism
Polymorphism means "many forms". It allows methods to do different things based on the object calling them. Two types:

* **Compile-time (Method Overloading)**
* **Run-time (Method Overriding)**

---

### ➤ **Compile-time Polymorphism (Overloading)**

```cpp
#include <iostream>
using namespace std;

class Print {
public:
    void show(int i) {
        cout << "Integer: " << i << endl;
    }
    void show(double d) {
        cout << "Double: " << d << endl;
    }
};

int main() {
    Print p;
    p.show(10);
    p.show(10.5);
    return 0;
}
```

---

### ➤ **Run-time Polymorphism (Overriding with Virtual Functions)**

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal sound" << endl;
    }
};

class Cat : public Animal {
public:
    void sound() override {
        cout << "Meow" << endl;
    }
};

int main() {
    Animal* a = new Cat();
    a->sound();  // Calls Cat's sound()
    delete a;
    return 0;
}
```

---

