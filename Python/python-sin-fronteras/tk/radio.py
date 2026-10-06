# from tkinter import *

# root = Tk()
# root.title('Hola Mundo')
# root.geometry('400x200')

# r = IntVar()
# r.set('2')

# Radiobutton(root, text='Opcion1', variable=r, value=1).pack()
# Radiobutton(root, text='Opcion2', variable=r, value=2).pack()

# l = Label(root, textvariable=r)
# l.pack()

# root.mainloop()



from tkinter import *

root = Tk()
root.title('Hola Mundo')
root.geometry('400x200')

r = IntVar()
r.set('2')

CHANCHITOS = [
    ('Feliz', 'Feliz'),
    ('Triste', 'Triste'),
    ('Amargado', 'Amargado'),
    ('Wolfgang', 'Wolfgang')
]

chanchito = StringVar()
chanchito.set('Presiona tu opcion')

for text, chancho in CHANCHITOS:
    Radiobutton(root, text=text, variable=chanchito, value=chancho).pack()

l = Label(root, textvariable=chanchito)
l.pack()

root.mainloop()