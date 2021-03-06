define({ "api": [
  {
    "type": "post",
    "url": "/book/add",
    "title": "add book",
    "name": "Add_Book",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>book isbn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>book name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>book author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>book category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gener",
            "description": "<p>book gener</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rackno",
            "description": "<p>book rackno</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"_id\": \"60efd7d21ceac128885117bc\",\n        \"isbn\": \"1234567890001\",\n        \"title\": \"demo book4\",\n        \"author\": \"demo \",\n        \"category\": \"abc\",\n        \"gener\": \"xyz\",\n        \"rackNo\": \"1b\",\n        \"status\": \"available\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/remove/:id",
    "title": "cancelbook reservation",
    "name": "CancelBook_Reservation",
    "group": "Books",
    "permission": [
      {
        "name": "user,admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>book_reservation id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   json data,\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "delete",
    "url": "/book/remove/:id",
    "title": "delete book",
    "name": "Delete_Book",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>book id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"_id\": \"60efd7d21ceac128885117bc\",\n        \"isbn\": \"1234567890001\",\n        \"title\": \"demo book\",\n        \"author\": \"demo \",\n        \"category\": \"abc\",\n        \"gener\": \"xyz\",\n        \"rackNo\": \"1b\",\n        \"status\": \"available\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/:id",
    "title": "edit book",
    "name": "Edit_Book",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>book id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"_id\": \"60efd7d21ceac128885117bc\",\n        \"isbn\": \"1234567890001\",\n        \"title\": \"demo book4\",\n        \"author\": \"demo \",\n        \"category\": \"abc\",\n        \"gener\": \"xyz\",\n        \"rackNo\": \"1b\",\n        \"status\": \"available\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "add",
    "url": "/book/issue",
    "title": "issue book",
    "name": "Issue_Book",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookid",
            "description": "<p>book id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"_id\": \"60efd7d21ceac128885117bc\",\n        \"isbn\": \"1234567890001\",\n        \"title\": \"demo book4\",\n        \"author\": \"demo \",\n        \"category\": \"abc\",\n        \"gener\": \"xyz\",\n        \"rackNo\": \"1b\",\n        \"status\": \"issued\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "add",
    "url": "/book/reserved",
    "title": "reserve book",
    "name": "Reserve_Book",
    "group": "Books",
    "permission": [
      {
        "name": "user,admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookid",
            "description": "<p>book id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"reservedDate\": \"2021-07-15T07:12:32.207Z\",\n        \"_id\": \"60efe0193d58b303e4d6f4f0\",\n        \"bookid\": \"60efd7d21ceac128885117bc\",\n        \"userid\": \"60ef196e8b61ba16482b6e18\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "put",
    "url": "/book/return",
    "title": "return book",
    "name": "Return_Book",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueid",
            "description": "<p>bookissued id (_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"message\": \"book is returned\"\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/search?bname=title,page=1&perpage=5",
    "title": "search book",
    "name": "Search_Book",
    "group": "Books",
    "permission": [
      {
        "name": "user,admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bname",
            "description": "<p>book title</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"data\": [\n            {\n                \"_id\": \"60efd7d21ceac128885117bc\",\n                \"isbn\": \"1234567890001\",\n                \"title\": \"demo book4\",\n                \"author\": \"demo \",\n                \"category\": \"abc\",\n                \"gener\": \"xyz\",\n                \"rackNo\": \"1b\",\n                \"status\": \"available\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 1\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/issued/showall?page=1&perpage=5",
    "title": "showall issued books",
    "name": "ShowAll_Issued_Books",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>book id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"data\": [\n            {\n                \"issueDate\": \"2021-07-14T16:57:35.581Z\",\n                \"_id\": \"60ef28188b61ba16482b6e43\",\n                \"bookid\": \"60ef1b538b61ba16482b6e25\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"dueDate\": \"2021-07-28T18:08:24.331Z\",\n                \"__v\": 0,\n                \"returnDate\": \"2021-07-14T18:13:06.813Z\"\n            },\n            {\n                \"issueDate\": \"2021-07-14T16:57:35.581Z\",\n                \"_id\": \"60ef29648b61ba16482b6e52\",\n                \"bookid\": \"60ef1b538b61ba16482b6e25\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"dueDate\": \"2021-07-28T18:13:56.866Z\",\n                \"__v\": 0,\n                \"returnDate\": \"2021-07-14T18:25:18.179Z\"\n            },\n            {\n                \"issueDate\": \"2021-07-14T18:25:17.393Z\",\n                \"_id\": \"60ef2c8dc4d5960a78adb0a2\",\n                \"bookid\": \"60ef1b538b61ba16482b6e25\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"dueDate\": \"2021-07-28T18:27:25.456Z\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/issued/user/:id",
    "title": "show books issued to user",
    "name": "ShowUser_Books",
    "group": "Books",
    "permission": [
      {
        "name": "user,admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"data\": [\n            {\n                \"issueDate\": \"2021-07-14T16:57:35.581Z\",\n                \"_id\": \"60ef28188b61ba16482b6e43\",\n                \"bookid\": \"60ef1b538b61ba16482b6e25\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"dueDate\": \"2021-07-28T18:08:24.331Z\",\n                \"__v\": 0,\n                \"returnDate\": \"2021-07-14T18:13:06.813Z\"\n            },\n            {\n                \"issueDate\": \"2021-07-14T16:57:35.581Z\",\n                \"_id\": \"60ef29648b61ba16482b6e52\",\n                \"bookid\": \"60ef1b538b61ba16482b6e25\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"dueDate\": \"2021-07-28T18:13:56.866Z\",\n                \"__v\": 0,\n                \"returnDate\": \"2021-07-14T18:25:18.179Z\"\n            },\n            {\n                \"issueDate\": \"2021-07-14T18:25:17.393Z\",\n                \"_id\": \"60ef2c8dc4d5960a78adb0a2\",\n                \"bookid\": \"60ef1b538b61ba16482b6e25\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"dueDate\": \"2021-07-28T18:27:25.456Z\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/reserved/user/:id",
    "title": "show reserved books by user",
    "name": "ShowUser_Reserved_Books",
    "group": "Books",
    "permission": [
      {
        "name": "user,admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>userid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"data\": [\n            {\n                \"reservedDate\": \"2021-07-15T07:12:32.207Z\",\n                \"_id\": \"60efe0193d58b303e4d6f4f0\",\n                \"bookid\": \"60efd7d21ceac128885117bc\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/showall?page=1&perpage=5",
    "title": "showall books",
    "name": "Show_All",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"data\": [\n            {\n                \"_id\": \"60ef1b538b61ba16482b6e25\",\n                \"isbn\": \"1234567890122\",\n                \"title\": \"demo book2\",\n                \"author\": \"demo 1\",\n                \"category\": \"abc\",\n                \"gener\": \"xyz\",\n                \"rackNo\": null,\n                \"status\": \"issued\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"60ef27548b61ba16482b6e41\",\n                \"isbn\": \"1234567890111\",\n                \"title\": \"demo book3\",\n                \"author\": \"demo \",\n                \"category\": \"abc\",\n                \"gener\": \"xyz\",\n                \"rackNo\": \"1b\",\n                \"status\": \"available\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": \"1\",\n        \"pages\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/reserved/showall?page=1&perpage=5",
    "title": "showall reserved books",
    "name": "Show_Reserved_Books",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"data\": [\n            {\n                \"reservedDate\": \"2021-07-15T07:12:32.207Z\",\n                \"_id\": \"60efe0193d58b303e4d6f4f0\",\n                \"bookid\": \"60efd7d21ceac128885117bc\",\n                \"userid\": \"60ef196e8b61ba16482b6e18\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "put",
    "url": "/book/update",
    "title": "update book",
    "name": "Update_Book",
    "group": "Books",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>book id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>book isbn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>book name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>book author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>book category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gener",
            "description": "<p>book gener</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rackno",
            "description": "<p>book rackno</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"_id\": \"60efd7d21ceac128885117bc\",\n        \"isbn\": \"1234567890001\",\n        \"title\": \"demo book\",\n        \"author\": \"demo \",\n        \"category\": \"abc\",\n        \"gener\": \"xyz\",\n        \"rackNo\": \"1b\",\n        \"status\": \"available\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/bookRoutes.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/user/editprofile/:id",
    "title": "edit user",
    "name": "Edit_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>userid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"role\": \"user\",\n        \"status\": \"active\",\n        \"_id\": \"60efcff48754dc1e20a4646b\",\n        \"name\": \"test003\",\n        \"email\": \"test003@g.com\",\n        \"password\": \"$2b$10$IfWe9aXzhu1KqQI.WuT75Ovs4mQGKz8iW0/dbxtVAzHKozH4sdIHy\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "user login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "anyone"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWZjZmY0ODc1NGRjMWUyMGE0NjQ2YiIsInJvbGUiOiJ1c2VyIiwicGFzc3dvcmQiOiIkMmIkMTAkSWZXZTlhWHpodTFLcVFJLld1VDc1T3ZzNG1RR0t6OGlXMC9kYnh0VkF6SEtvekg0c2RJSHkiLCJpYXQiOjE2MjYzMjk1NDUsImV4cCI6MTYyNjkzNDM0NX0.OHSX7XYn5Qyw7MJfrqhffjnTpIHcOFZwcntGP1ygP2s\",\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "register user",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>usernames</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "anyone"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"role\": \"user\",\n        \"status\": \"active\",\n        \"_id\": \"60efcff48754dc1e20a4646b\",\n        \"name\": \"test003\",\n        \"email\": \"test003@g.com\",\n        \"password\": \"$2b$10$IfWe9aXzhu1KqQI.WuT75Ovs4mQGKz8iW0/dbxtVAzHKozH4sdIHy\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/showall?page=1&perpage=5",
    "title": "showall user",
    "name": "ShowAll",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"data\": [\n            {\n                \"role\": \"admin\",\n                \"status\": \"active\",\n                \"_id\": \"60ef182f8b61ba16482b6e14\",\n                \"name\": \"test01\",\n                \"email\": \"test01@t.com\",\n                \"password\": \"$2b$10$nUDgCd12j9jWJtRXxDwH/.pPqwXQ7oAVEF4UqdVmI5YQ5pumvbovK\",\n                \"__v\": 0\n            },\n            {\n                \"role\": \"user\",\n                \"status\": \"active\",\n                \"_id\": \"60ef196e8b61ba16482b6e18\",\n                \"name\": \"test001\",\n                \"email\": \"test001@g.com\",\n                \"password\": \"$2b$10$ThwWOIbrW3VndXhdw9M2Curx6G3SyzTD4y46tIQC7VDkhE9AUVUd6\",\n                \"__v\": 0\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/updateprofile",
    "title": "update profile",
    "name": "Update_Profile",
    "group": "User",
    "permission": [
      {
        "name": "user,admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>userid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"role\": \"user\",\n        \"status\": \"active\",\n        \"_id\": \"60efcff48754dc1e20a4646b\",\n        \"name\": \"test003\",\n        \"email\": \"test003@gm.com\",\n        \"password\": \"$2b$10$IfWe9aXzhu1KqQI.WuT75Ovs4mQGKz8iW0/dbxtVAzHKozH4sdIHy\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/updatestatus",
    "title": "update status",
    "name": "Update_Status",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>userid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>blocked,active</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"role\": \"user\",\n        \"status\": \"blocked\",\n        \"_id\": \"60efcff48754dc1e20a4646b\",\n        \"name\": \"test003\",\n        \"email\": \"test003@gm.com\",\n        \"password\": \"$2b$10$IfWe9aXzhu1KqQI.WuT75Ovs4mQGKz8iW0/dbxtVAzHKozH4sdIHy\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"err.message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  }
] });
