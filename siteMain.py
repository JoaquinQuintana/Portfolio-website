from flask import Flask, render_template

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

@app.route("/publications")
def publications():
    return render_template("publications.html")

@app.route("/spinner")
def spinner():
    return render_template("spinner.html")


if __name__ == "__main__":
    app.run(debug=True)