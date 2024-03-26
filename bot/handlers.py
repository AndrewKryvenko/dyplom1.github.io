from main import bot, dp
from keyboards import keyboard
from aiogram import types
from aiogram.dispatcher.filters import Command

@dp.message_handler(Command('start'))
async def start(message: types.Message):
    await bot.send_message(message.chat.id, 'Тестируем WebApp!',
                           reply_markup=keyboard)

PRICE = {
    '1': [types.LabeledPrice(label='Item1', amount=58)],
    '2': [types.LabeledPrice(label='Item2', amount=68)],
    '3': [types.LabeledPrice(label='Item3', amount=105)],
    '4': [types.LabeledPrice(label='Item4', amount=125)],
    '5': [types.LabeledPrice(label='Item5', amount=196)],
    '6': [types.LabeledPrice(label='Item6', amount=108)],
    '7': [types.LabeledPrice(label='Item7', amount=209)],
    '8': [types.LabeledPrice(label='Item8', amount=106)],
    '9': [types.LabeledPrice(label='Item9', amount=141)],
    '10': [types.LabeledPrice(label='Item10', amount=214)],
    '11': [types.LabeledPrice(label='Item11', amount=213)],
    '12': [types.LabeledPrice(label='Item12', amount=40)],
    '13': [types.LabeledPrice(label='Item13', amount=125)],
    '14': [types.LabeledPrice(label='Item14', amount=136)],
    '15': [types.LabeledPrice(label='Item15', amount=79)],
    '16': [types.LabeledPrice(label='Item16', amount=64)],
    '17': [types.LabeledPrice(label='Item17', amount=52)],
    '18': [types.LabeledPrice(label='Item18', amount=90)],
    '19': [types.LabeledPrice(label='Item19', amount=64)],
    '20': [types.LabeledPrice(label='Item20', amount=91)],
    '21': [types.LabeledPrice(label='Item21', amount=129)],
    '22': [types.LabeledPrice(label='Item23', amount=273)],
    '23': [types.LabeledPrice(label='Item24', amount=86)],
    '24': [types.LabeledPrice(label='Item25', amount=148)],
    '25': [types.LabeledPrice(label='Item26', amount=273)],
    '26': [types.LabeledPrice(label='Item27', amount=273)],
    '27': [types.LabeledPrice(label='Item28', amount=96)],
    '28': [types.LabeledPrice(label='Item29', amount=148)],
    '29': [types.LabeledPrice(label='Item30', amount=229)],
    '30': [types.LabeledPrice(label='Item31', amount=273)],
    '31': [types.LabeledPrice(label='Item32', amount=273)],
    '32': [types.LabeledPrice(label='Item33', amount=27)],
    '33': [types.LabeledPrice(label='Item34', amount=27)],
    '34': [types.LabeledPrice(label='Item35', amount=16)],
    '35': [types.LabeledPrice(label='Item36', amount=16)],
    '36': [types.LabeledPrice(label='Item37', amount=16)],
    '37': [types.LabeledPrice(label='Item38', amount=16)],
    '38': [types.LabeledPrice(label='Item39', amount=16)],
    '39': [types.LabeledPrice(label='Item40', amount=16)],
    '40': [types.LabeledPrice(label='Item41', amount=16)],
    '41': [types.LabeledPrice(label='Item42', amount=16)],
    '42': [types.LabeledPrice(label='Item43', amount=19)],
    '43': [types.LabeledPrice(label='Item44', amount=10)],
    '44': [types.LabeledPrice(label='Item45', amount=10)],
    '45': [types.LabeledPrice(label='Item46', amount=64)],
    '46': [types.LabeledPrice(label='Item47', amount=53)],
    '47': [types.LabeledPrice(label='Item48', amount=46)],
    '48': [types.LabeledPrice(label='Item49', amount=64)],
    '49': [types.LabeledPrice(label='Item50', amount=64)],
    '50': [types.LabeledPrice(label='Item51', amount=64)],
    '51': [types.LabeledPrice(label='Item52', amount=60)],
    '52': [types.LabeledPrice(label='Item53', amount=60)],
    '53': [types.LabeledPrice(label='Item54', amount=60)],
    '54': [types.LabeledPrice(label='Item55', amount=75)],
    '55': [types.LabeledPrice(label='Item56', amount=75)],
    '56': [types.LabeledPrice(label='Item57', amount=75)],
    '57': [types.LabeledPrice(label='Item58', amount=71)],
    '58': [types.LabeledPrice(label='Item59', amount=71)],
    '59': [types.LabeledPrice(label='Item50', amount=71)],
    '60': [types.LabeledPrice(label='Item60', amount=46)],
    '61': [types.LabeledPrice(label='Item61', amount=53)],
    '62': [types.LabeledPrice(label='Item62', amount=53)],
    '63': [types.LabeledPrice(label='Item63', amount=42)],
    '64': [types.LabeledPrice(label='Item64', amount=35)],
    '65': [types.LabeledPrice(label='Item65', amount=29)],
    '66': [types.LabeledPrice(label='Item66', amount=42)],
    '67': [types.LabeledPrice(label='Item67', amount=35)],
    '68': [types.LabeledPrice(label='Item68', amount=29)],
    '69': [types.LabeledPrice(label='Item69', amount=42)],
    '70': [types.LabeledPrice(label='Item70', amount=35)],
    '71': [types.LabeledPrice(label='Item71', amount=29)],
    '72': [types.LabeledPrice(label='Item72', amount=21)],
    '73': [types.LabeledPrice(label='Item73', amount=19)],
    '74': [types.LabeledPrice(label='Item74', amount=21)],
    '75': [types.LabeledPrice(label='Item75', amount=19)],
    '76': [types.LabeledPrice(label='Item76', amount=42)],
    '77': [types.LabeledPrice(label='Item77', amount=32)],
    '78': [types.LabeledPrice(label='Item78', amount=27)],
    '79': [types.LabeledPrice(label='Item79', amount=27)],
    '80': [types.LabeledPrice(label='Item80', amount=60)],
    '81': [types.LabeledPrice(label='Item81', amount=65)],
    '82': [types.LabeledPrice(label='Item82', amount=56)],
    '83': [types.LabeledPrice(label='Item83', amount=62)],
    '84': [types.LabeledPrice(label='Item84', amount=62)],
    '85': [types.LabeledPrice(label='Item85', amount=62)],
    '86': [types.LabeledPrice(label='Item86', amount=67)],
    '87': [types.LabeledPrice(label='Item87', amount=62)],
    '88': [types.LabeledPrice(label='Item88', amount=62)],
    '89': [types.LabeledPrice(label='Item89', amount=62)],
    '90': [types.LabeledPrice(label='Item90', amount=67)],
    '91': [types.LabeledPrice(label='Item91', amount=62)],
    '92': [types.LabeledPrice(label='Item92', amount=72)]


}

@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):
    quantity = int(web_app_message.web_app_data.data)
    price_label = f'Item{quantity}'
    labeled_price_amount = PRICE[str(quantity)] * quantity
    labeled_price = types.LabeledPrice(label=price_label, amount=labeled_price_amount)
    await bot.send_invoice(web_app_message.chat.id,
                           title='Laptop',
                           description='Description',
                           provider_token='pay_token',
                           currency='uah',
                           need_email=True,
                           prices=[labeled_price],
                           start_parameter='example',
                           payload='some_invoice')

@dp.pre_checkout_query_handler(lambda query: True)
async def pre_checkout_process(pre_checkout: types.PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout.id, ok=True)

@dp.message_handler(content_types=types.ContentType.SUCCESSFUL_PAYMENT)
async def successful_payment(message: types.Message):
    await bot.send_message(message.chat.id, 'Оплата пройшла успішно! Смачного!')
