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
                    }
                }
            },
            ua: {
                translation: {
                    StartPage:{
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
                    }
                }
            }
        }
    });

export default i18n;