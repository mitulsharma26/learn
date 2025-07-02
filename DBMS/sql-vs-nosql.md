# Difference Between SQL and NoSQL Databases

| Feature              | SQL (Relational DB)                       | NoSQL (Non-relational DB)                    |
|----------------------|-------------------------------------------|----------------------------------------------|
| Data Model           | Table-based (rows and columns)            | Document, key-value, graph, or wide-column   |
| Schema               | Fixed and predefined                      | Dynamic and flexible                         |
| Query Language       | SQL (Structured Query Language)           | Varies: JSON-like queries, key-based, etc.   |
| Scalability          | Vertically scalable                       | Horizontally scalable                        |
| ACID Compliance      | Fully ACID-compliant                      | Often BASE compliant (eventual consistency)  |
| Examples             | MySQL, PostgreSQL, Oracle, SQL Server     | MongoDB, Cassandra, Redis, CouchDB           |
| Best Use Case        | Structured data with complex joins        | Large volumes of unstructured/semi-structured data |
| Joins                | Supported                                 | Generally not supported                      |
| Storage Format       | Relational (normalized tables)            | JSON, XML, key-value pairs, graphs, etc.     |

*

---

## 1. Schema

* A **schema** is the **structure/blueprint of a database**.
* It defines:

  * **Tables**
  * **Columns**
  * **Data types** (e.g., INTEGER, VARCHAR)
  * **Relationships** (e.g., foreign keys)

**Example (SQL Schema)**:

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);
```

**In SQL:** Schema is **strict and fixed**.
**In NoSQL:** Schema is **flexible or even absent**—data can vary across records.

---

## 2. JSON (JavaScript Object Notation)

* **JSON** is a **lightweight data format** used for storing and transporting data.
* It uses **key-value pairs** and is **easy for both humans and machines** to understand.

**Example JSON Document (used in NoSQL like MongoDB)**:

```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

**In NoSQL (like MongoDB)**, entire records are stored as JSON-like documents.

---

## 3. ACID Compliance (SQL Feature)

ACID ensures **data reliability and integrity** in databases:

| Property            | Description                                          |
| ------------------- | ---------------------------------------------------- |
| **A** - Atomicity   | All steps in a transaction complete or none do.      |
| **C** - Consistency | Data remains valid before and after the transaction. |
| **I** - Isolation   | Transactions don’t affect each other.                |
| **D** - Durability  | Once committed, data is permanently saved.           |

**SQL databases are ACID compliant**, ensuring safe and reliable transactions.

---

## 4. Joins

* A **JOIN** in SQL is used to **combine data from two or more tables** based on a related column (usually a foreign key).

**Example (SQL JOIN)**:

```sql
SELECT orders.id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;
```

**In SQL:** Joins are powerful and allow complex queries across multiple tables.
**In NoSQL:** Joins are **not natively supported**, data is usually stored together (denormalized) to avoid joins.

