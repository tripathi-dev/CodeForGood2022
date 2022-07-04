from django.urls import path
from . import views


urlpatterns = [

    path('contest/<int:id>',views.ContestView().as_view(),name="contest_detail"),
    path('contests/',views.ContestView().as_view(),name="contests"),
]