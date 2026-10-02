from tkinter import *

root = Tk()
root.title('Hola Mundo')
root.geometry('500x300')

exit = Button(root, text='Salir', command=root.quit)
exit.pack()

root.mainloop()