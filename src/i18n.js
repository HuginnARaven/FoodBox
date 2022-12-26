import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    StartPage:{
                        what_it_title:"What it is?",
                        what_it_text:"Our software system is a platform for convenient delivery" +
                            "food for small and medium-sized businesses. FoodBox is available on two languages: " +
                            "Ukrainian and English. FoodBox it`s a cross-platform web program " +
                            "with a convenient and easy-to-learn interface. Main" +
                            "the motivation of the project is to create competition in the food delivery market for it" +
                            "development.",
                        important_title: "Why it`s is important?",
                        important_text: "Workplaces in modern companies and business centers require the provision of high-quality food for employees. " +
                            "This is a component of social responsibility, creation of comfortable working conditions, health care and prevention of a number of occupational diseases. " +
                            "There are several ways to do it. The first is complete autonomy, we cook ourselves, we consume ourselves. " +
                            "The second — we involve professionals in the organization of office catering or delivery of lunches to the office. " +
                            "The third is to use the services of the nearest cafes and restaurants. Each of these methods has its own advantages and disadvantages.",
                        side_title: "Let's find out which side are you on?",
                        side_text: "Imagine that you have found a contractor who is ready to fulfill all the gastronomic whims of your employees. " +
                            "Developed a multifaceted menu. Collecting orders by e-mail, runners, in excel tables is a terror on the wings of the night. " +
                            "Then insults that someone ordered the wrong thing, calculations for not eating, errors both in orders and in delivery. " +
                            "And if someone was late and left without lunch, or vice versa, on an urgent business trip and could not stop the order of his lunch. " +
                            "Now imagine a contractor who prepares food for many such offices. All this can negate the great idea of making the lives of colleagues better and easier. What to do? " +
                            "The FoodBox system for automating corporate catering, both when you only consume delicious meals and when you prepare, deliver and feed employees of offices, companies and enterprises.",
                        why_title:"Why FoodBox?",
                        why_text:"Analogues of FoodBox are various delivery services. But these services are aimed at " +
                            "the mass consumer and not at commercial organizations. This has certain disadvantages " +
                            "and inconveniences for the employees of these organizations, such as the inability " +
                            "to order food for a certain time in advance and the need to personally pick " +
                            "up the order from the courier.",
                        what_prise_title:"What about monetization?",
                        what_prise_text:"The first is the purchase of food delivery boxes by companies. " +
                            "The second is advertising for food suppliers among companies that need them. " +
                            "The third is an opportunity for owners or managers of organizations to by subscribe plan " +
                            "for receiving more detailed information about their food supply.",
                        who_clients_title:"Who is this system aimed at?",
                        who_clients_text:"The main users of our software product are small and medium-sized companies " +
                            "that cannot fully provide food for their employees, " +
                            "and food suppliers who are looking for customers.",
                    },
                    NavHeader:{
                        main: "Main",
                        account: "Account",
                        language: "Language",
                        profile: "Profile",
                        subscription: "Subscription",
                        logout: "Log out",
                        login: "Log in",
                        singup: "Sing up now!",
                    },
                    Form:{
                        username: "Username",
                        password: "Password",
                        password1: "Repeat password",
                        enter_username: "Enter username",
                        enter_password: "Enter password",
                        first_name: "First name",
                        last_name: "Last name",
                        enter_name: "Enter Name",
                        company_name: "Company name",
                        supplier_name: "Supplier name",
                        supplier_info: "Supp info",
                        company_info: "Comp info",
                        description: "Description",
                        accounttype: "Account type",
                        address: "Address",
                        menus: "Menus",
                        status: "Status",
                        enter_address: "Input your address",
                        company: "Company",
                        supplier: "Supplier",
                        login: "Log in",
                        singup: "Sing up now!",
                        login_form: "Login form",
                        register_form: "Register form",
                        payment: "Payment",
                        change_password: "Change password",
                        change_password_title: "Change password from",
                        old_password: "Old password",
                        change_payment: "Change payment",
                        change_payment_title: "Change payment from",
                        create_worker: "Create worker's account",
                        create_worker_title: "Create worker's account form",
                        edit_worker_title: "Edit worker's account form",
                        create_courier: " Create courier's account",
                        create_courier_title: "Create courier's account form",
                        edit_courier_title: "Edit courier's account form",
                        delete_form_title: "Delete form",
                        delete_form_text_part_1: "Are you sure,that you want ot delete ",
                        delete_form_text_part_2: "`s account?",
                        delete_form_text_part_3: "If you do, retype his username",
                        delete_form_sure_text: "Are you sure?",
                        delete_form_sure_dtn_text: "Yes, delete anyway",
                        get_more_info: "Get more info",
                        save: "Save changes",
                        create: "Create",
                        close: "Close",
                        delete: "Delete",
                        edit: "Edit",
                        search: "Search",
                        accept: "Accept",
                        yes: "Yes",
                        no: "No",
                    },
                    CompanyPage:{
                        profile:"Profile",
                        workers: "Workers",
                        boxes: "Boxes",
                        contracts: "Contracts",
                    },
                    SupplierPage:{
                        profile:"Profile",
                        couriers: "Couriers",
                        contracts: "Contracts",
                        menus: "Menus",
                        offers: "Offers",
                    },
                    Box:{
                        buy_box_btn_title: "By box",
                        buy_box_form_title: "By box form",
                        buy_standard_box_title: "Standard box(100$)",
                        buy_standard_box_description: "A standard box is designed for one simultaneous order and 10 employees. " +
                            "After purchasing it, you will receive a discount on a premium subscription " +
                            "and the possibility of verification.",
                        contact_txt: "We will contact you later via email",
                        order_box_btn_title: "Order",
                    },
                    BoxWorkers:{
                        workers: "Workers",
                        box_workers_form_title_part1: "Box #",
                        box_workers_form_title_part2: " workers from",
                        box_add_worker_form_title: "Add worker",
                    },
                    Contracts:{
                        find_supp_btn: "Find suppliers",
                        is_approved: "Is approved:",
                        send: "Send contract request",
                    },
                    Menu:{
                        create_menu_btn: "Create menu",
                        menu_create_form: "Create menu form",
                        products_menu_btn: "Products",
                        menu_name: "Menu name",
                        menu_description: "Menu description",
                        menu_edit_form: "Menu edit form",
                        product_name:"Product name",
                        product_price: "Price",
                        add_product: "Add product",
                        picture: "Picture"
                    },
                    Subscription:{
                        subscription_title: "Subscriptions",
                        standard_title: "Standard",
                        premium_title: "Premium",
                        workers_title: "Workers",
                        workers_text_standard:"max 20 workers account(+3 for each box)",
                        workers_text_premium:"unlimited workers account",
                        contracts: "Contracts",
                        contracts_text_standard:"max 5 unapproved contracts",
                        contracts_text_premium:"max 15 unapproved contracts",
                        boxes_title: "Box statistic",
                        worker_history_title: "Worker offers history",
                        couriers_title: "Couriers",
                        couriers_text_standard:"max 10 couriers account",
                        couriers_text_premium:"unlimited couriers account",
                        offers_history_title: "Offers history",
                        top_search_title: "Top palace in search",
                        prise_standard:"free",
                        prise_premium:"10$/month",
                        set_premium: "Set to premium",
                        set_standard: "Set to standard",
                    },
                    Offers:{
                        status_title: "Status",
                        status_sent: "Sent",
                        status_accepted: "Accepted",
                        status_delivered: "Delivered",
                        status_got: "Got",
                        deliver_title: "Deliver to",
                        courier_title: "Courier",
                        decline_btn: "Decline",
                        accept_btn: "Accept",
                        info_btn: "Info",
                        sender_title: "Customer",
                        content_title: "Content",
                        total_cost_title: "Total cost",
                        rating_title: "Rating",
                        info_form_title: "Offer info form",
                        accept_form_title: "Offer accept form",
                    }
                }
            },
            ua: {
                translation: {
                    StartPage:{
                        what_it_title:"Що це таке?",
                        what_it_text:"Наша програмна це платформа для зручного постачання" +
                            "їжі малому та середньому бізнесу. FoodBox доступний двома мовами:" +
                            "українською та англійською. FoodBox буде кросплатформеною веб-програмою " +
                            "зі зручним і простим у освоєнні інтерфейсом. Головною" +
                            "мотивацією проекту є створення конкуренції на ринку доставки їжі для його" +
                            "розвитку.",
                        important_title: "Чому це важливо?",
                        important_text: "Робочі місця в сучасних компаніях та бізнес-центрах потребують забезпечення можливості якісного харчування співробітників. Це компонент соціальної відповідальності, " +
                            "створення комфортних умов роботи, турбота про здоров'я та запобігання цілої низки професійних захворювань. " +
                            "Є декілька способів як це зробити. Перший — повна автономія, самі готуємо, самі споживаємо. " +
                            "Другий — залучаємо професіоналів з організації офісного харчування або доставки обідів до офісу. " +
                            "Третій — користуємось послугами найближчих кафе і ресторанів. Кожен з цих способів має свої недоліки та переваги.",
                        side_title: "З'ясуємо на якому ви боці?",
                        side_text: "Уявіть — ви знайшли підрядника, який готовий виконувати всі гастрономічні забаганки ваших співробітників. " +
                            "Розробив багатогранне меню. Збір замовлень електронною поштою, бігунками, в таблицях excel — жах на крилах ночі. " +
                            "Потім образи, що хтось замовляв не це, розрахунки за те що “не їв”, помилки як в замовленнях так і в доставці. " +
                            "А якщо хтось запізнився і залишився без обіду, або навпаки, у терміновому відрядженні і не зміг зупинити замовлення свого обіду. " +
                            "Тепер уявіть підрядника який готує їжу для багатьох таких офісів. Все це може звести нанівець велику ідею зробити життя колег якісніше та простіше. Що ж робити? " +
                            "Система FoodBox для автоматизації корпоративного харчування і в разі, коли ви тільки споживаєте смачні страви, і в разі, коли ви їх готуєте, доставляєте та годуєте працівників офісів, компаній та підприємств.",
                        why_title:"Чому саме FoodBox?",
                        why_text:"Аналогами FoodBox є різноманітні служби доставки" +
                            "Але ці служби орієнтовані на масового споживача а не на комерційні" +
                            "організації. Це має певні недоліки та незручності для співробітників цих організацій, " +
                            "наприклад неможливість замовити їжу на певний час заздалегідь " +
                            "та необхідність особисто забирати замовлення у кур’єра.",
                        what_prise_title:"Яка тут монетизація?",
                        what_prise_text:"Перше це придбання боксів для доставки їжі компаніями. Другий це реклама " +
                            "для постачальників їжі серед компаній які їх потребують. Третій це " +
                            "можливість власникам або менеджерам організацій оформити підписку для " +
                            "отримання більш детальної інформації про їхні спарави сотосовно їжі.",
                        who_clients_title:"На кого оріентованя ця система?",
                        who_clients_text:"Основними користувачами нашого програмного продукту" +
                            "передбачаються малі та середні компанії, які не можуть повноцінно" +
                            "забезпечити працівників їжею, та постачальники продовольства які шукають" +
                            "для себе клієнтів.",
                    },
                    NavHeader:{
                        main: "Головна",
                        account: "Обліковій запис",
                        language: "Мова",
                        profile: "Профіль",
                        subscription: "Підписки",
                        logout: "Вийти",
                        login: "Авторизуватись",
                        singup: "Зареєструватися",
                    },
                    Form:{
                        username: "Ім'я користувача",
                        password: "Пароль",
                        password1: "Повторіть пароль",
                        company_name: "Назва компанії",
                        enter_username: "Введіть ім'я користувача",
                        enter_password: "Введіть пароль",
                        first_name: "Ім'я",
                        last_name: "Прізвище",
                        enter_name: "Введіть ім'я вашої організації",
                        supplier_name: "Найменування постачальника",
                        supplier_info: "Інфо",
                        company_info: "Інфо",
                        description: "Опис",
                        accounttype: "Хто ви?",
                        address: "Адреса",
                        menus: "Меню",
                        status: "Статус",
                        enter_address: "Введіть свою адресу",
                        company: "Компанія",
                        supplier: "Постачальник",
                        login: "Авторизуватись",
                        singup: "Зареєструватися",
                        login_form: "Форма авторизації",
                        register_form: "Форма реєстрації",
                        payment: "Спосіб оплати",
                        change_password: "Змінити пароль",
                        change_password_title: "Форма зміни паролю",
                        old_password: "Старий пароль",
                        change_payment: "Змінити карту",
                        change_payment_title: "Форма зміни спосібу оплати",
                        create_worker: "Створити обліковий запис працівника",
                        create_worker_title: "Створити обліковий запис працівника",
                        edit_worker_title: "Форма редагування аккаунту працівника",
                        create_courier: "Створити обліковий запис кур'єра",
                        create_courier_title: "Створити обліковий запис кур'єра",
                        edit_courier_title: "Форма редагування аккаунту кур'єра",
                        delete_form_title: "Форма видалення",
                        delete_form_text_part_1: "Ви впевнені, що хочете видалити аккаунт ",
                        delete_form_text_part_2: "",
                        delete_form_text_part_3: "Якщо так, тоді введіть ім'я його аккаунту",
                        delete_form_sure_text: "Ви дійсно впевнені?",
                        delete_form_sure_dtn_text: "Так, все одно видалити",
                        get_more_info: "Доп. інфо",
                        save: "Зберегти зміни",
                        create: "Створити",
                        close: "Закрити",
                        delete: "Видалити",
                        edit: "Редагувати",
                        search: "Шукати",
                        accept: "Прийняти",
                        yes: "Так",
                        no: "Ні",
                    },
                    CompanyPage:{
                        profile:"Профіль",
                        workers: "Робітники",
                        boxes: "Пристрої",
                        contracts: "Контракти",
                    },
                    SupplierPage:{
                        profile:"Профіль",
                        couriers: "Кур'єри",
                        contracts: "Контракти",
                        menus: "Меню",
                        offers: "Замовлення",
                    },
                    Box:{
                        buy_box_btn_title: "Придбати бокс",
                        buy_box_form_title: "Форма придбання боксу",
                        buy_standard_box_title: "Стандартний 'бокс'(100$)",
                        buy_standard_box_description: "Стандартний 'бокс' розрахований на одне одночасне замовлення та 10 працівників. " +
                            "Придбавши його ви ортримаете знижку на преміум підписку та можливість веріфкуватиись.",
                        contact_text: "Ми зв'яжемося з вами пізніше електронною поштою",
                        order_box_btn_title: "Замовити",
                    },
                    BoxWorkers:{
                        workers: "Працівники",
                        box_workers_form_title_part1: "Форма боксу #",
                        box_workers_form_title_part2: " зміни працівників",
                        box_add_worker_form_title: "Додати",
                    },
                    Contracts:{
                        find_supp_btn: "Знайти постачальників",
                        is_approved: "Затверджено:",
                        send: "Надіслати запит на договір",

                    },
                    Menu:{
                        create_menu_btn: "Створити меню",
                        menu_create_form: "Форма cтворення меню",
                        products_menu_btn: "Страви",
                        menu_name: "Назва меню",
                        menu_description: "Опис меню",
                        menu_edit_form: "Форма редагування меню",
                        product_name: "Назва страви",
                        product_price: "Ціна",
                        add_product: "Додати продукт",
                        picture: "Зображення"
                    },
                    Subscription:{
                        subscription_title: "Підписки",
                        standard_title: "Стандартна",
                        premium_title: "Преміум",
                        workers_title: "Працівники",
                        workers_text_standard:"максимум 20 акаунтів працівників(+3 за кожен бокс)",
                        workers_text_premium:"необмежена кількість акаунтів",
                        contracts: "Контракти",
                        contracts_text_standard:"максимум 5 непідтвердженних контрактів",
                        contracts_text_premium:"максимум 15 непідтвердженних контрактів",
                        boxes_title: "Статистика пристроїв",
                        worker_history_title: "Істроія замовлень працівників",
                        couriers_title: "Кур'єри",
                        couriers_text_standard:"максимум 10 акаунтів кур'єрів",
                        couriers_text_premium:"необмежена кількість акаунтів",
                        offers_history_title: "Історія замовлень",
                        top_search_title: "Високе місце в пошуку",
                        prise_standard:"Безкоштовно",
                        prise_premium:"10$/місяць",
                        set_premium: "Обрати преміум",
                        set_standard: "Обрати стандатну",
                    },
                    Offers:{
                        status_title: "Статус",
                        status_sent: "Запит",
                        status_accepted: "Прийнято",
                        status_delivered: "Доставлено",
                        status_got: "Отромиане",
                        deliver_title: "Адреса доставки",
                        courier_title: "Кур'єр",
                        decline_btn: "Відхилити",
                        accept_btn: "Прийняти",
                        info_btn: "Інфо",
                        sender_title: "Замовник",
                        content_title: "Зміст",
                        total_cost_title: "Загальна вартість",
                        rating_title: "Оцінка",
                        info_form_title: "Інформація про замовлення",
                        accept_form_title: "Форма прийняття замовлення",
                    },
                }
            }
        }
    });

export default i18n;