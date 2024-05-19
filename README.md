# How to use this editor

#### 1. Make a example directory
Open terminal, run

```bash
mkdir example
cd example
touch index.html
```

##### 2. Clone a repo

```shell
    git clone https://github.com/Fakhar7/editor.git
```

##### 3. First add the link of latest bootstrap css and icon cdn in index.html head

```html
<head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css" integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
```


#### 4. Add files to html file 

```html
    <link rel="stylesheet" href="editor/index.css">
    <link rel="stylesheet" href="editor/prism.css">
```

##### 4. Paste in your html file body section

```html
<body>
  <div class="prism-container container p-0">
    <pre class="no-padding">
        <code class="language-cpp">
            "Hello World"
        </code>
    </pre>
  </div>
</body>
```

Now see magic!😄😄😄
