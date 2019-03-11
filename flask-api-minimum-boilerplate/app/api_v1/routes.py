from flask_restplus import Resource
from . import api


class Status(Resource):
    def get(self):
        return {
            "status": "Up and running"
        }, 200


class DB(Resource):
    def get(self):
        return {
            "db": "len(user)"
        }, 200

class Content(Resource):
    def get(self):
        import random

        fake_data = [
            {
              "start_time": 1550798326,
              "stop_time": 1550798478,
              "emergency": 0,
              "talkgroup": 7200,
              "talkgroup_name": "West County Fire Dispatch 2",
              "srcList": [
                {
                  "src": 25073,
                  "time": 1550798326,
                  "pos": 0
                },
                {
                  "src": 22640,
                  "time": 1550798330,
                  "pos": 2.808
                },
                {
                  "src": 25073,
                  "time": 1550798332,
                  "pos": 4.392
                },
                {
                  "src": 27278,
                  "time": 1550798337,
                  "pos": 9.18
                },
                {
                  "src": 25073,
                  "time": 1550798340,
                  "pos": 10.98
                },
                {
                  "src": 22640,
                  "time": 1550798353,
                  "pos": 21.024
                },
                {
                  "src": 25073,
                  "time": 1550798360,
                  "pos": 23.4
                },
                {
                  "src": 22640,
                  "time": 1550798370,
                  "pos": 30.42
                },
                {
                  "src": 27278,
                  "time": 1550798372,
                  "pos": 31.5
                },
                {
                  "src": 22640,
                  "time": 1550798375,
                  "pos": 32.76
                },
                {
                  "src": 27278,
                  "time": 1550798376,
                  "pos": 33.48
                },
                {
                  "src": 22640,
                  "time": 1550798380,
                  "pos": 36.396
                },
                {
                  "src": 27268,
                  "time": 1550798385,
                  "pos": 37.62
                },
                {
                  "src": 22640,
                  "time": 1550798392,
                  "pos": 42.66
                },
                {
                  "src": 27268,
                  "time": 1550798395,
                  "pos": 44.1
                },
                {
                  "src": 22640,
                  "time": 1550798410,
                  "pos": 57.024
                },
                {
                  "src": 27268,
                  "time": 1550798413,
                  "pos": 58.32
                },
                {
                  "src": 22640,
                  "time": 1550798422,
                  "pos": 65.412
                },
                {
                  "src": 27268,
                  "time": 1550798425,
                  "pos": 66.96
                },
                {
                  "src": 22640,
                  "time": 1550798434,
                  "pos": 74.088
                },
                {
                  "src": 27268,
                  "time": 1550798436,
                  "pos": 75.96
                },
                {
                  "src": 22640,
                  "time": 1550798449,
                  "pos": 85.644
                },
                {
                  "src": 27268,
                  "time": 1550798452,
                  "pos": 87.48
                },
                {
                  "src": 22640,
                  "time": 1550798455,
                  "pos": 89.604
                },
                {
                  "src": 27276,
                  "time": 1550798461,
                  "pos": 90.54
                },
                {
                  "src": 22640,
                  "time": 1550798463,
                  "pos": 92.484
                },
                {
                  "src": 27276,
                  "time": 1550798466,
                  "pos": 93.96
                },
                {
                  "src": 22640,
                  "time": 1550798469,
                  "pos": 96.444
                }
              ]
            },
            {
                "start_time": 1550799999,
                "stop_time": 1550719999,
                "emergency": 0,
                "talkgroup": 7200,
                "audioSrc": "/audio/test.wav",
                "talkgroup_name": "Light Sabre Posse",
                "srcList": [
                  {
                    "src": 9999,
                    "time": 1550798326,
                    "pos": 0
                  },
                ]
            },
            {
                "start_time": 1550799999,
                "stop_time": 1550719999,
                "emergency": 0,
                "talkgroup": 7200,
                "audioSrc": "/audio/test1.wav",
                "talkgroup_name": "Death Star",
                "srcList": [
                  {
                    "src": 8888,
                    "time": 1550798326,
                    "pos": 0
                  },
                  {
                    "src": 9999,
                    "time": 1550798326,
                    "pos": 5
                  },
                  {
                    "src": 7777,
                    "time": 1550798326,
                    "pos": 8
                  },
                  {
                    "src": 3333,
                    "time": 1550798326,
                    "pos": 11.5
                  },
                  {
                    "src": 5555,
                    "time": 1550798326,
                    "pos": 17.1
                  },
                ]
            },
            {
                "start_time": 1550799999,
                "stop_time": 1550719999,
                "emergency": 0,
                "talkgroup": 7200,
                "audioSrc": "/audio/test2.wav",
                "talkgroup_name": "Chewbacka and Crew",
                "srcList": [
                  {
                    "src": 1111,
                    "time": 1550798326,
                    "pos": 0
                  },
                  {
                    "src": 2222,
                    "time": 1550798326,
                    "pos": 6
                  },
                  {
                    "src": 3333,
                    "time": 1550798326,
                    "pos": 9
                  },
                  {
                    "src": 4444,
                    "time": 1550798326,
                    "pos": 14
                  },
                ]
            },
        ]
        sample_int = random.randint(1,2)
        return {
            "test-cont": "Yes...it's working!",
            "int": "{}".format(sample_int),
            "data": fake_data[sample_int]
        }, 200

api.add_resource(Content, '/content')
api.add_resource(Status, '/status')
api.add_resource(DB, '/db')
