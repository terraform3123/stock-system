from django.contrib import admin
from .models import Produto

# Register your models here.
@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ("nome", "quantidade")
    search_fields = ("nome", )
    list_filter = ("nome", "preco")
    ordering = ("nome", )
