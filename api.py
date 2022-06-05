from flask import Flask ,request
from flask_cors import CORS
import MySQLdb,json
import MySQLdb.cursors as msqlcur

app = Flask(__name__)
CORS(app)

config_db = {
    "user": "root",
    "password": "1234",
    "host": "127.0.0.1",
    "database": "crawl_data",
    "port": 3306,
    "cursorclass": msqlcur.DictCursor
}

@app.route('/get' ,methods=['POST'])
def hello_world():
    data = request.get_json()
    conn = MySQLdb.connect(**config_db)
    cursor = conn.cursor()
    sql = f"SELECT rank,present FROM recommend WHERE gender='{data['gender']}' AND age='{data['age']}' AND situation='{data['event']}';"
    print(sql)
    cursor.execute(sql)
    getRaw = cursor.fetchall()
    conn.close()
    print(getRaw)
    return json.dumps(getRaw)

if __name__ == '__main__':
    app.run(debug=True)

    