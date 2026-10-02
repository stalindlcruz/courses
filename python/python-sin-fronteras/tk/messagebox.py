from tkinter import *
from tkinter import messagebox

root = Tk()
root.title('Hola Mundo')
root.geometry('400x200')

# def click():
#     messagebox.showwarning('Popup', 'Hola Mundo')

# def click():
#     messagebox.showinfo('Popup', 'Hola Mundo')

# def click():
#     messagebox.showerror('Popup', 'Hola Mundo')

# def click():
#     respuesta = messagebox.askquestion('Popup', 'Hola Mundo! :(')
#     if respuesta == 'yes':
#         messagebox.showinfo('Respuesta', 'La respuesta fue ' + respuesta)
#     else:
#         messagebox.showinfo('Respuesta', 'La respuesta fue ' + respuesta + ' :(')

# def click():
#     respuesta = messagebox.askokcancel('Hola Mundo', 'Desea realizar accion?')
#     if respuesta:
#         messagebox.showinfo('Hola Mundo', 'La respuesta fue OK')
#     else:
#         messagebox.showinfo('Hola Mundo', 'La respuesta fue CANCELAR')

def click():
    respuesta = messagebox.askyesno('Hola Mundo', 'Desea realizar accion?')
    print(respuesta)
    if respuesta:
        messagebox.showinfo('Hola Mundo', 'La respuesta fue YES')
    else:
        messagebox.showinfo('Hola Mundo', 'La respuesta fue NO')

btn = Button(root, text='Presioname', command=click)
btn.pack()

root.mainloop()