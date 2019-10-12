from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///twilio.db"

CORS(app)

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Users(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    password = db.Column(db.String(101))

    def __init__(self, username, password):
        self.username = username
        self.password = password

class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "username", "password")

user_schema = UserSchema()
users_schema = UserSchema(many=True)
@app.route("/get-all-users", methods=["GET"])
def get_users():
    all_users = Users.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)
@app.route('/login-user/<username>/<passW>', methods=["GET"])
def login_user(username,passW):
    user_signed_up = Users.query.filter_by(username= username).first()
    if user_signed_up:
        if user_signed_up.password == passW:
            return {"LOGGED_IN": True}
        else: 
            return {"LOGGED_IN" : 'Wrong Password!'}
    else: 
        print('wrong')
        return {"LOGGED_IN" : "Wrong Username!"}
    
@app.route("/new-user", methods=["POST"])
def new_user():
    username = request.json["username"]
    password = request.json["password"]

    user_exists = Users.query.filter_by(username= username).first()
    new_user = Users(username, password)
    if not user_exists:
        db.session.add(new_user)
        db.session.commit()
        created_user = Users.query.get(new_user.id)
        return user_schema.jsonify(created_user)
    else:
        string = {"error" : 'User Already Exists!'}
        return string
    
    


if __name__ == '__main__':
    app.run(debug=True)