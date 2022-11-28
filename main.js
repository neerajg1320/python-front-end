const python_src = `
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

