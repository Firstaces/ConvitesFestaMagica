from fpdf import FPDF
import os

# Subclasse com rodapé
class PDFComRodape(FPDF):
    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "I", 8)
        self.cell(0, 10, "Baixado em convitesfestamagica.com.br - Convites personalizados e mágicos", 0, 0, "C")

# Caminhos das imagens
caminho_capa = r"C:\Users\andre\OneDrive\Documentos\Python\Meus códigos\ConvitesAnimados\temp_safari\capa_safari.jpg"
caminhos_desenhos = [
    r"C:\Users\andre\OneDrive\Documentos\Python\Meus códigos\ConvitesAnimados\temp_safari\leaozinho_colorir.jpg",
    r"C:\Users\andre\OneDrive\Documentos\Python\Meus códigos\ConvitesAnimados\temp_safari\elefante_colorir.jpg",
    r"C:\Users\andre\OneDrive\Documentos\Python\Meus códigos\ConvitesAnimados\temp_safari\zebra_colorir.jpg",
    r"C:\Users\andre\OneDrive\Documentos\Python\Meus códigos\ConvitesAnimados\temp_safari\girafa_colorir.jpg",
]

# Caminho do PDF final
pdf_path = r"C:\Users\andre\OneDrive\Documentos\Python\Meus códigos\ConvitesAnimados\pack_safari_para_colorir_festamagica.pdf"

# Mensagem de carinho
mensagem = (
    "Olá, família encantada!\n\n"
    "Preparamos este Pack Safari com muito carinho para deixar a diversão ainda mais mágica! "
    "Esperamos que as crianças se divirtam colorindo e criando momentos inesquecíveis.\n\n"
    "Com amor,\nEquipe Festa Mágica"
)

# Criação do PDF
pdf = PDFComRodape(orientation="P", unit="mm", format="A4")
pdf.set_auto_page_break(auto=True, margin=20)

# Capa
if os.path.exists(caminho_capa):
    pdf.add_page()
    pdf.image(caminho_capa, x=0, y=0, w=210, h=297)
else:
    print("⚠️ Imagem de capa não encontrada.")

# Página de mensagem
pdf.add_page()
pdf.set_font("Arial", "B", 16)
pdf.multi_cell(0, 10, mensagem, align="C")

# Desenhos
for img_path in caminhos_desenhos:
    if os.path.exists(img_path):
        pdf.add_page()
        pdf.image(img_path, x=10, y=10, w=190)
    else:
        print(f"⚠️ Imagem não encontrada: {img_path}")

# Salvar
pdf.output(pdf_path)
print(f"🎉 PDF criado com sucesso: {pdf_path}")

