from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime
import operator



class Track(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Contest(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    description = models.TextField(max_length=1000,blank=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def get_duration(self):
        return self.end_date - self.start_date

    def status(self):
        """
        
         :return:  1 --> Contest is live
         :return: -1 --> Contest has finished
         :return:  0 --> Contest has not started
        """
        if datetime.now()<self.start_date:
            return 0
        elif self.start_date<=datetime.now()<self.end_date:
            return 1
        else:
            return -1
    def get_start_date(self):
        return str(self.start_date)

    def __str__(self):
        return self.title








