

# Project Title

Include a brief description or tagline for your project here. This should be a concise and compelling statement that quickly communicates the purpose of your project.

## Description

Provide a more detailed description of your project here. This should include information on what your project does, why it is useful, and any key features or benefits.

- [Project Title](#project-title)
  - [Description](#description)
  - [Hosted](#hosted)
  - [Tech Stack](#tech-stack)
    - [Client-side](#client-side)
    - [Sever-side](#sever-side)
    - [Testing](#testing)
  - [UX Research](#ux-research)
  - [UI Design](#ui-design)
  - [Trello](#trello)
  - [Features](#features)
  - [A11y](#a11y)
    - [AXE audit results](#axe-audit-results)
  - [Lessons Learned](#lessons-learned)
  - [Roadmap](#roadmap)
  - [Color Reference](#color-reference)
  - [Environment Variables](#environment-variables)
  - [API Reference](#api-reference)
  - [Globals](#globals)
  - [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Hosted

Where is the app hosted?

## Tech Stack

### Client-side

- List of Client applications

### Sever-side

- List of sever-side applications

### Testing

List of testing applications

## UX Research

- ### Problem

Provide a brief description of the problem.

- ### Solution

Provide a brief description of the problem.

## UI Design

- ### Mockups

![UI Mockups](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

- ### Prototype

![UI Prototype](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

- ### Testing

What user test did you conduct?

- #### Users

Number of users

## Trello

![Trello Board](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

## Features

- List of features

## A11y

- List of tools used

### AXE audit results

![Axe audit](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

## Lessons Learned

Provide a brief description of what you learned from the project.

## Roadmap

Include a brief description of the next phrase of project.

## Color Reference

| Color | Hex |
| --- | --- |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## API Reference

- #### Swagger

![Api gui](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

- #### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

- #### Post all items

```http
  POST /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Post item

```http
  POST /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

- #### PUT item

```http
  PUT /api/items/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Delete all items

```http
  DELETE /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Delete item

```http
  DELETE /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Globals

- ### Variables

```
identifier
```

| Required | Property | Key     | Type     | Description |
| :------- | :------- | :------ | :------- | :---------- |
| `true`   | `name`   | `value` | `string` |             |

- ### Arrays

```
identifier
```

Array.length value:

| index    | Key     | Type     | Description |
| :------- | :------ | :------- | :---------- |
| `number` | `value` | `string` |             |

- ### Functions

Number of arguments:

| Parameter | Type     | Return              | Description |
| :-------- | :------- | :------------------ | :---------- |
| `name`    | `string` | **Required**. value |             |

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
