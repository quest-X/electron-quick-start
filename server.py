from flask import Flask, request
from sum import add

app = Flask(__name__)


@app.route("/summation", methods=["POST"])
def summation():
    numa = int(request.json.get("numa"))
    numb = int(request.json.get("numb"))
    result = add(numa, numb)
    return result


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
