

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
Sure! Here's a **simple definition and use cases** for both:

---

## Virtual Function
A **virtual function** is a member function in a base class that can be **overridden** in a derived class. It supports **run-time polymorphism**, allowing the function call to be resolved based on the **object type**, not the pointer type.

### Use Cases:

* When you want to allow derived classes to **optionally override** a function.
* When you want **dynamic behavior** based on object types (e.g., different display functions for different shapes).
* Useful in cases where a **base pointer refers to a derived object**.

---

## Pure Virtual Functio
A **pure virtual function** is a virtual function that has **no definition** in the base class and **must be overridden** in any derived class. It is declared using `= 0`. Any class with at least one pure virtual function becomes an **abstract class**.

### Use Cases:

* When you want to **enforce a contract** for all derived classes.
* When you're designing **interfaces or abstract base classes**.
* Useful when the base class should only provide a **common structure**, but not specific implementations.

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
# E-commerce model using all major OOP concepts (c++) :

## The model includes:

* `User` and `Customer` classes
* `Product` class
* `Cart` class
* `Order` class
* Demonstration in `main()`

```cpp
#include <iostream>
#include <vector>
using namespace std;

// ===================== ABSTRACT BASE CLASS =====================
class Person {
protected:
    string name;
    string email;

public:
    // Constructor
    Person(string n, string e) : name(n), email(e) {}

    // Pure virtual function -> Abstraction
    virtual void displayDetails() = 0;

    // Virtual destructor
    virtual ~Person() {}
};

// ===================== CUSTOMER CLASS =====================
// Inherits Person -> Inheritance
class Customer : public Person {
private:
    int customerID;

public:
    Customer(string n, string e, int id) : Person(n, e), customerID(id) {}

    void displayDetails() override {
        cout << "Customer Name: " << name << ", Email: " << email << ", ID: " << customerID << endl;
    }

    int getCustomerID() {
        return customerID;
    }
};

// ===================== PRODUCT CLASS =====================
class Product {
private:
    int id;
    string name;
    double price;

public:
    // Constructor
    Product(int pid, string pname, double pprice) : id(pid), name(pname), price(pprice) {}

    // Getter methods -> Encapsulation
    int getID() { return id; }
    string getName() { return name; }
    double getPrice() { return price; }

    void displayProduct() {
        cout << "Product ID: " << id << ", Name: " << name << ", Price: $" << price << endl;
    }
};

// ===================== CART CLASS =====================
class Cart {
private:
    vector<Product> items;

public:
    void addToCart(Product p) {
        items.push_back(p);
        cout << "Added to cart: " << p.getName() << endl;
    }

    void showCart() {
        cout << "\n--- Cart Items ---" << endl;
        for (auto item : items) {
            item.displayProduct();
        }
    }

    double getTotalAmount() {
        double total = 0.0;
        for (auto item : items) {
            total += item.getPrice();
        }
        return total;
    }

    vector<Product> getItems() {
        return items;
    }
};

// ===================== ORDER CLASS =====================
class Order {
private:
    int orderID;
    Customer customer; // Composition: Order "has-a" Customer
    vector<Product> products; // Order "has-a" Products

public:
    // Constructor
    Order(int oid, Customer c, vector<Product> pList) : orderID(oid), customer(c), products(pList) {}

    void displayOrder() {
        cout << "\n--- Order Summary ---" << endl;
        customer.displayDetails();
        cout << "Order ID: " << orderID << endl;
        cout << "Items Ordered:" << endl;

        double total = 0;
        for (auto p : products) {
            p.displayProduct();
            total += p.getPrice();
        }

        cout << "Total Amount: $" << total << endl;
    }
};

// ===================== MAIN FUNCTION =====================
int main() {
    // Creating a customer object
    Customer cust("John Doe", "john@example.com", 101);

    // Creating product objects
    Product p1(1, "Laptop", 750.00);
    Product p2(2, "Mouse", 25.50);
    Product p3(3, "Keyboard", 45.75);

    // Adding products to cart
    Cart cart;
    cart.addToCart(p1);
    cart.addToCart(p2);
    cart.addToCart(p3);

    cart.showCart();

    // Creating an order
    Order order1(5001, cust, cart.getItems());

    // Displaying the order summary
    order1.displayOrder();

    return 0;
}
```

---

