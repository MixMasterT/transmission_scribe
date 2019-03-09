# flask-api-minimum-boilerplate
A basic boilerplate for Flask with flask-restplus, postgresql and pytest

* Python 3.6
* Flask 0.12
* flask-restplus 0.10.1
* flask-sqlalchemy 2.3.2
* psycopg2 2.7.4
* pytest 3.0.6
* pytest-cov 2.5.1
* pytest-html 1.16.1
* pytest-sugar 0.9.1
* pylint 1.8.2
* factory_boy 2.10.0

The boilerplate builds an API by using Flask's blueprint functionality. 
he API will be available on /api/v1/

The only endpoint setup is: /api/v1/status which returns a status message.

## Project Structure
  ```sh
  ├── README.md
  ├── autoapp.py
  ├── config.py
  ├── requirements.txt
  ├── app
  │   ├── __init__.py
  │   ├── models.py  
  │   └── api_v1
  │       ├── __init__.py
  │       ├── routes.py
  └── tests
          ├── test_routes.py
          ├── test_db.py
          └── conftest.py
  ```
  
## Project Setup
```
>> virtualenv venv -p python3
>> source venv/bin/activate
>> pip install -r requirements.txt
>> export FLASK_APP=autoapp.py
>> export FLASK_DEBUG=1
>> flask run
```
Point your browser/GET request to:
http://localhost:5000/api/v1/status

```
{
    status: "Up and running"
}
```
You can find the Swagger autogenerated documentation for the api/v1 here:
```
http://localhost:5000/api/v1/
```
### Testing

Will run py.test like: 'py.test --cov=app tests'.
```
>> flask test
```
A test databse will be created if it doesn't already exist.


## Running with docker-compose
```
>> docker-compose up
```
### Testing with docker-compose
```
docker exec -i -t flaskapiminimumboilerplate_app_1 flask test
```
If you get an 'ImportMismatchError', you will have to delete the 'tests/__pycache__' folder and run the test command again.