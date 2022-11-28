const python_html = (python_src) => {
  return `
  <html>
    <head>
    <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    <py-env>
      - pandas
    </py-env>
    </head>
    <body>
      <py-script>
       ${python_src}
      </py-script>
    </body>
  </html>
  `;
};

const python_sample_html = () => {
  return `
  <html>
    <head>
    <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    <py-env>
      - pandas
    </py-env>
    </head>
    <body>
      <py-script>
        import pandas as pd
        df = pd.DataFrame([['one', 'two'], ['three', 'four']], columns=['A', 'B'])
        print(df.to_json(orient='records'))
      </py-script>
    </body>
  </html>
  `;
};