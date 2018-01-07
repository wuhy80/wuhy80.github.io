[Peewee](https://github.com/coleifer/peewee)
>Peewee is a simple and small ORM. It has few (but expressive) concepts, making it easy to learn and intuitive to use.

```python
from peewee import *
from playhouse.sqlite_ext import SqliteExtDatabase
import datetime

db = SqliteExtDatabase('my_database.db')

class BaseModel(Model):
    class Meta:
        database = db

class User(BaseModel):
    username = CharField(unique=True)

class Tweet(BaseModel):
    user = ForeignKeyField(User, related_name='tweets')
    message = TextField()
    created_date = DateTimeField(default=datetime.datetime.now)
    is_published = BooleanField(default=True)
```

Connect to the database and create tables:

```python
db.connect()
db.create_tables([User, Tweet])
```
