# Usage

This section outlines methods of using of the database, and goes through some examples.

There are several methods of using the database, depending on your purpose:
- [**General Browsing/Querying**](#general-browsingquerying): Use an application such as [DBeaver](https://dbeaver.io/) to query the  [SQLite database](https://github.com/ShabadOS/database/releases)
- [**Offline App**](#offline-applications-sqlite): Download the [SQLite database](https://github.com/ShabadOS/database/releases)
- [**Offline JavaScript App (recommended)**](#offline-applications-javascript): Install the [API via npm](installation#npm)
- [**Online App**](#online-applications-gurbaninow-api): Use the [GurbaniNow API](https://github.com/GurbaniNow/api)

## General Browsing/Querying
If you're interested in the contents of the database, start by downloading the latest
[SQLite database release](https://github.com/ShabadOS/database/releases), and an SQLite browser such as [DBeaver](https://dbeaver.io/).

Once installed, open the `Database > New Connection` dialog. Select the `SQLite` type from the list, and press `Next`. On the following screen, press the `Browse` button and select the Shabad OS database file that you previously downloaded, and proceed through the next screens until wizard is complete.

A new database entry will appear under the `Database Navigator` tab, and double-clicking this will open the database. Expand the `tables` option to view all the tables in the database, and double-click on any of the tables to view the data. You may also run some of the [SQL queries](#Offline-Applications-SQLite) and explore the dataset further.

## Offline Applications - SQLite
If you're building a mobile app or desktop application, you'll likely want an offline copy of the database, unless you're certain your users will always be connected to the internet.

You can download the latest [SQLite database release](https://github.com/ShabadOS/database/releases) and query against it using your language's SQLite library.

!> This option will mean that you will have to check the Shabad OS Database release page for updates yourself. If you are building an application in JavaScript, please see the [Offline Applications - JavaScript](#Offline-Applications-JavaScript) section below.

Some common SQL queries have been provided below:

### Common SQL Query Examples

#### Given some first letters, retrieve any matching Lines
```sql
SELECT * FROM lines WHERE first_letters LIKE '%hhhh%' ORDER BY order_id
```


`hhhh` is starting letters of the first 4 words in the line.

#### Given a Shabad ID, retrieve the Lines
```sql 
SELECT * FROM lines WHERE shabad_id = '9N9' ORDER BY order_id
```

#### Given a Source, retrieve all the Translation Sources, with Languages and Author Namess
```sql
SELECT * FROM sources
JOIN translation_sources ON translation_sources.source_id = sources.id
JOIN languages ON languages.id = translation_sources.language_id
WHERE source_id = 1
```

### Given any Shabad ID (from any Source), retrieve the possible Translations
```sql
SELECT * FROM lines
JOIN shabads ON shabads.id = lines.shabad_id
JOIN translations ON lines.id = translations.line_id 
WHERE shabad_id = 'W9Z'
ORDER BY order_id
```

#### Given some Lines, retrieve the Dr. Sant Singh Khalsa English Translations
```sql
SELECT * FROM lines
JOIN translations ON lines.id = translations.line_id
JOIN translation_sources ON translation_sources.id = translations.translation_source_id
WHERE shabad_id = 'W9Z'
AND translation_sources.name_english = 'Dr. Sant Singh Khalsa'
ORDER BY order_id
```

**Note:** it is preferable to select a translation source by its `id`, than a text value, unlike the example above.

#### Fetch all the Lines for a given Bani
```sql
SELECT * FROM lines
JOIN bani_lines ON bani_lines.line_id = lines.id
WHERE bani_lines.bani_id = 1
ORDER BY order_id
```

Fetch a list of Banis and their corresponding `id`s with `SELECT * FROM banis`.

#### Fetch all the Shabads for a given Writer

```sql
SELECT * FROM lines
JOIN shabads ON shabads.id = lines.shabad_id
WHERE writer_id = 3
```

Fetch a list of writers and their `id`s with `SELECT * FROM writers`.

## Offline Applications - JavaScript

## Online Applications - GurbaniNow API