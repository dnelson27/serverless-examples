import requests

def handler():
    resp = requests.GET("http://www.google.com")
    print(resp)