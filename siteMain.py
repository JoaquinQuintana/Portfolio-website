from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/About")
def about():
    return render_template("About.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/publications")
def publications():
    return render_template("publications.html")


if __name__ == "__main__":
    app.run(debug=True)