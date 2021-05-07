from django.shortcuts import render, redirect, get_object_or_404
from .models import Blog
from django.utils import timezone

# Create your views here.

def main(request):
    blogs = Blog.objects.all()
    return render(request, 'main.html', {'blogs' : blogs})


def detail(request, id):
    blog = get_object_or_404(Blog, pk = id) # 찾을 수 없다는 예외처리를 해준 것임
    return render(request, 'detail.html', {'blog' : blog})

