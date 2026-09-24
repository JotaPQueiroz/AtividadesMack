codigo = int(input("Digite o tipo de investimento: "))
valor = float(input("Digite o valor inicial: "))
meses = int(input("Digite o prazo em meses: "))

if codigo == 1:
    taxa = 0.005
elif codigo == 2:
    taxa = 0.008
elif codigo == 3:
    taxa = 0.01

valor_futuro = valor * (1 + taxa) ** meses

print(f"Valor futuro: {valor_futuro:.2f}")