from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from main import app

http_server = HTTPServer(WSGIContainer(app))
# http_server.listen(5001)
http_server.listen(5001)
print ("starting......8080")
IOLoop.instance().start()
