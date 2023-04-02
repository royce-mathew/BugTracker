from flask import Flask
from py4j.java_gateway import JavaGateway 

def main():
    gateway = JavaGateway()
    random = gateway.jvm.java.util.Random()
    print(random)
    gateway.entry_point.stop()

main();