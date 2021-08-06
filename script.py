import gspread

gc = gspread.service_account(filename='credentials.json')
sh = gc.open_by_key('11Aqr_EbR5T33DlUbMuQ-fFjWvpcfb7o2GeciroOgM30')


worksheet = sh.worksheet('Sheet1')

def get_data():

    count_nb_connected = 0
    count_message_send = 0
    nombre_de_connecte = worksheet.col_values(9)
    message_envoye = worksheet.col_values(10)

    nombre_de_connecte.pop(0)

    for connected in nombre_de_connecte:
        if(connected == 'connected'):
            count_nb_connected +=1

    for message in message_envoye:
        if(message == 'Oui'):
            count_message_send +=1

    jsonData = {'Nombre de connecté': { str(count_nb_connected)}, {'Nombre de message envoyé' : {str(count_message_send)}}


    jsonFile = open("data.json", "w")
    jsonFile.write(jsonData)
    jsonFile.close()

    return str(count_nb_connected)

get_data()