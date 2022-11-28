import pandas as pd
df = pd.DataFrame([['one', 'two'], ['three', 'four']], columns=['A', 'B'])
print(df.to_json(orient='records'))