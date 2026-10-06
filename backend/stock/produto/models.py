from django.db import models

# Create your models here.
class Produto(models.Model):
    nome = models.CharField(max_length=150)
    preco = models.FloatField(default=0.00)
    quantidade = models.IntegerField(default=0)
    descricao = models.TextField(blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "produto"
        verbose_name_plural = "produtos"
        ordering = ["quantidade"]

    def __str__(self):
        return self.nome