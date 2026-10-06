from django.urls import path
from .views import ProdutoListAPIView

urlpatterns = [
    path("produto/", ProdutoListAPIView.as_view(), name="api_produto_view")
]
