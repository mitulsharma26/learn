# ER Model (Entity-Relationship Model) 

The Entity-Relationship (ER) Model is a high-level conceptual data model used to define and describe the data elements and their relationships within a system. It provides a graphical representation through ER diagrams, making it easier to understand the structure and design of a database at the conceptual level. The ER model captures:



---

## Components of the ER Model 

| Component            | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| **Entity**           | A real-world object or concept (like `Student`, `Car`, `Course`).        |
| **Attribute**        | Properties or details of an entity (like `Name`, `Age`, `Roll Number`).  |
| **Entity Set**       | Collection of similar entities (e.g., all Students).                     |
| **Relationship**     | Association among entities (like `Enrolled` between Student and Course). |
| **Relationship Set** | Collection of similar relationships.                                     |
| **Primary Key**      | Uniquely identifies each entity.                                         |

---

## Types of Entities 


### Strong Entity

1. Can exist **independently** in the database.
2. Has a **primary key** that uniquely identifies each entity.
3. Represented by a **single rectangle** in ER diagrams.
4. Does **not** depend on any other entity for its identification.
5. Example: `Student`, `Employee`, `Product`.


### Weak Entity

1. **Cannot exist independently**; needs a strong entity for existence.
2. Does **not have a complete primary key**; identified using a **partial key** + foreign key.
3. Represented by a **double rectangle** in ER diagrams.
4. Always exists in a relationship with a **strong entity**.
5. Example: `Dependent` (of an Employee), `OrderItem` (of an Order).

---

## Types of Relationships

| Type                    | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| **One-to-One (1:1)**    | One entity is related to one and only one other entity.   |
| **One-to-Many (1\:N)**  | One entity is related to many others, but not vice versa. |
| **Many-to-Many (M\:N)** | Many entities are related to many others.                 |
| **Recursive**           | An entity is related to itself.                           |

---

## ER Diagram Notations 

| Element                      | Symbol / Notation  | Description                                                   |
| ---------------------------- | ------------------ | ------------------------------------------------------------- |
| **Entity**                   | Rectangle          | Represents an entity set                                      |
| **Attribute**                | Ellipse (Oval)     | Represents an attribute                                       |
| **Primary Key**              | Underlined Ellipse | Uniquely identifies entities in an entity set                 |
| **Relationship**             | Diamond            | Shows a relationship between entities                         |
| **Line**                     | Straight line      | Connects attributes to entities and entities to relationships |
| **Weak Entity**              | Double Rectangle   | Entity that can't exist without a related strong entity       |
| **Identifying Relationship** | Double Diamond     | Connects a weak entity to its identifying strong entity       |
| **Multivalued Attribute**    | Double Ellipse     | Attribute that can have multiple values                       |
| **Derived Attribute**        | Dashed Ellipse     | Attribute that can be derived from others                     |

---
