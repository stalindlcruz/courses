from tkinter import *
from PIL import ImageTk, Image

root = Tk()
root.title('Hola Mundo')
root.geometry('400x200')

# # Solucion 1.
# def open():
#     img = ImageTk.PhotoImage(Image.open('cascada.jpg'))
#     top = Toplevel()
#     top.title('Hola Mundo, this is a new window.')
#     l = Label(top, text='Soy un texto en una segunda ventana')
#     l2 = Label(top, image=img)
#     l.pack()
#     l2.pack()
#     top.mainloop()

# # Solucion 2.
# def open():
#     global img
#     img = ImageTk.PhotoImage(Image.open('cascada.jpg'))
#     top = Toplevel()
#     top.title('Hola Mundo, this is a new window.')
#     l = Label(top, text='Soy un texto en una segunda ventana')
#     l2 = Label(top, image=img)
#     l.pack()
#     l2.pack()

# Solucion 3.
def open(img):
    top = Toplevel()
    top.title('Hola Mundo, this is a new window.')
    l = Label(top, text='Soy un texto en una segunda ventana')
    l2 = Label(top, image=img)
    l.pack()
    l2.pack()

img = ImageTk.PhotoImage(Image.open('cascada.jpg'))
btn = Button(root, text='Click', command=lambda: open(img)).pack()

root.mainloop()