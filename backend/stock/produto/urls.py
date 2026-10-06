from django.urls import path
from .views import ProdutoListAPIView, ProdutoDetailAPIView

urlpatterns = [
    path("produto/", ProdutoListAPIView.as_view(), name="api_produto_view"),
    path("produto/<int:produto_id>", ProdutoDetailAPIView.as_view(), name="api_produto_detail"),
]
