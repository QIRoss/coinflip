import pandas as pd

df = pd.read_csv('./result.csv')
df['id_solicitante'] = df['id_solicitante'].astype(int)
df.to_csv('result2.csv',index=False)