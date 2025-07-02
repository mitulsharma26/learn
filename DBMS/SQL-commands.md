

## 1. Data Definition Language (DDL)

Defines and modifies **structure** of database objects like tables.

| Command    | Description                                            |
| ---------- | ------------------------------------------------------ |
| `CREATE`   | Creates a new table, database, view, etc.              |
| `ALTER`    | Modifies an existing table (add/remove columns, etc.)  |
| `DROP`     | Deletes a table, view, or database                     |
| `TRUNCATE` | Removes all records from a table (but keeps structure) |
| `RENAME`   | Renames a table or column                              |

---

## 2. Data Manipulation Language (DML)

Used to manage **data** inside tables.

| Command  | Description                            |
| -------- | -------------------------------------- |
| `SELECT` | Retrieves data from one or more tables |
| `INSERT` | Adds new rows of data                  |
| `UPDATE` | Modifies existing data                 |
| `DELETE` | Removes rows from a table              |

---

## 3. Data Control Language (DCL)

Controls **permissions and access** to data.

| Command  | Description                   |
| -------- | ----------------------------- |
| `GRANT`  | Gives privileges to users     |
| `REVOKE` | Removes privileges from users |

---

## 4. Transaction Control Language (TCL)

Manages **transactions** and controls changes made by DML.

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `COMMIT`          | Saves all changes made in the transaction  |
| `ROLLBACK`        | Undoes changes since last COMMIT           |
| `SAVEPOINT`       | Sets a point in transaction to rollback to |
| `SET TRANSACTION` | Sets properties for the transaction        |

---

## 5. Query Clauses (used with SELECT)

| Clause          | Description                                    |
| --------------- | ---------------------------------------------- |
| `WHERE`         | Filters rows based on condition                |
| `ORDER BY`      | Sorts the result in ascending/descending order |
| `GROUP BY`      | Groups rows sharing a property                 |
| `HAVING`        | Filters groups after grouping                  |
| `JOIN`          | Combines rows from multiple tables             |
| `LIMIT` / `TOP` | Restricts number of rows returned              |

