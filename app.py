from flask import Flask, render_template
from flask import Response
import pandas as pd
from sqlalchemy import create_engine
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template("index.html")

@app.route('/get_data')
def get_data():
    engine = create_engine('postgresql://postgres:postgres@localhost:5432/project3')
    df = pd.read_sql_table("chart_table",con=engine)
    return Response(df.to_json(orient="records"), mimetype='application/json')
    
if __name__ == '__main__':
    app.run(debug=True)