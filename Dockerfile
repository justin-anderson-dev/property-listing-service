FROM amazon/dynamodb-local

VOLUME ["/local/dynamodb/data/"]

EXPOSE 8000

CMD ["-jar", "DynamoDBLocal.jar", "-dbPath", "/local/dynamodb/data/db"]
