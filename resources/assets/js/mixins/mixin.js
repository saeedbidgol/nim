export default {
    data() {
        return {
            grid: {
                columnMenu: {
                    messages: {
                        columns: "ستون ها",
                        filter: "فیلتر",
                        sortAscending: "صعودی",
                        sortDescending: "نزولی"
                    }
                },
                filterable: {
                    messages: {
                        clear: "لغو",
                        filter: "فیلتر",
                        info: "",
                        checkAll: "انتخاب همه",
                        selectedItemsFormat: "{0} مورد انتخاب شده"
                    },
                    operators: {
                        string: {
                            eq: "برابر",
                            contains: "شامل"
                        }
                    },
                    extra: false
                },
                groupable: {
                    messages: {
                        empty: "تگ ها را انتخاب کرده و به اینجا بکشید!"
                    }
                },
                pageable: {
                    pageSizes: [30, 50, 70, 90],
                    messages: {
                        display: "{0} - {1} از {2} مورد",
                        empty: "موردی برای نمایش وجود ندارد",
                        page: "صفحه",
                        allPages: "همه",
                        of: "از {0}",
                        itemsPerPage: "مورد در هر صفحه",
                        first: "Go to the first page",
                        previous: "Go to the previous page",
                        next: "Go to the next page",
                        last: "Go to the last page",
                        refresh: "رفرش"
                    },
                    refresh: true
                }
            },
            requestStatus: {
                record: 0,
                refferdToExpert: 1,
                ignored: 2,
                returned: 3,
                done: 4,
                archive: 5
            }
        };
    },
    methods: {
        $separator(number) {
            return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
        $abilityCheck(skill, module) {
            let isAbility = new ability();
            return isAbility.checkAbility(skill, module);
        },
        $getJalaliDateTime(dateTime = null) {
            try {
                if (dateTime)
                    return moment(dateTime, "YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss");
                return moment().format("jYYYY/jMM/jDD HH:mm:ss");
            } catch (err) {
                console.log('Error in getJalaliDateTime', dateTime)
            }
        },
        $getJalaliDate(dateTime = null) {
            if (dateTime)
                return moment(dateTime, "YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD");
            return moment().format("jYYYY/jMM/jDD");
        },
        $catchErrors(error) {
            let errors = error.response.data;
            if (errors.errors) {
                let error = errors.errors;
                for (const key in error) {
                    this.$izitoast("error", error[key][0], "عملیات ناموفق!", {
                        position: "topRight",
                        displayMode: 2,
                        rtl: true
                    });
                }
            } else {
                let err = errors.message ? errors.message : null;
                this.$izitoast("error", null, "عملیات ناموفق!", {
                    position: "topRight",
                    displayMode: 2,
                    rtl: true
                });
            }
        },
        $persistClient(method, uri, data = null) {
            return new Promise((resolve, reject) => {
                axios[method](uri, data)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        let errors = error.response.data;
                        if (errors.errors) {
                            let error = errors.errors;
                            for (const key in error) {
                                this.$izitoast(
                                    "error",
                                    "عملیات ناموفق!",
                                    error[key][0],
                                    {
                                        position: "topRight",
                                        displayMode: 2
                                    }
                                );
                            }
                        } else {
                            let err = errors.message ? errors.message : null;
                            this.$izitoast("error", "عملیات ناموفق!", err, {
                                position: "topRight",
                                displayMode: 2
                            });
                        }
                        reject(error);
                    });
            });
        },
        $izitoast(
            type,
            message = null,
            title = null,
            option = {
                rtl: true
            }
        ) {
            if (!title) title = "";
            switch (type) {
                case "success":
                    this.$toast.success(message, title, option);
                    break;
                case "error":
                    this.$toast.error(message, title, option);
                    break;
                case "info":
                    this.$toast.info(message, title, option);
                    break;
                case "question":
                    this.$toast.question(message, title, option);
                    break;
            }
        },
        $alert(type, title = null, text = null, options = {}) {
            let notification = [];
            notification["type"] = type;
            notification["showCancelButton"] = false;
            switch (notification["type"]) {
                case "success":
                    notification["title"] =
                        title != null ? title : "عملیات موفق";
                    notification["text"] =
                        text != null ? text : "اطلاعات مورد نظر ثبت شد";
                    break;
                case "error":
                    notification["title"] =
                        title != null ? title : "عملیات ناموفق";
                    notification["text"] =
                        text != null ? text : "اطلاعات مورد نظر ثبت نشد";
                    break;
                case "question":
                    notification["title"] =
                        title != null ? title : "آیا مطمئن هستید؟";
                    notification["text"] =
                        text != null ? text : "امکان بازگشت عملیات وجود ندارد";
                    notification["showCancelButton"] = true;
                    notification["cancelButtonText"] = "خیر";
                    notification[
                        "confirmButtonColor"
                    ] = options.confirmButtonColor
                            ? options.confirmButtonColor
                            : "#d33";
                    notification[
                        "confirmButtonText"
                    ] = options.confirmButtonText
                            ? options.confirmButtonText
                            : "حذف";
                    notification["cancelButtonColor"] = "#3085d6";
                    break;
                case "warning":
                    break;
                case "info":
                    notification["title"] = title != null ? title : "اطلاعات";
                    notification["text"] = text != null ? text : "   ***** ";
                    break;
            }
            return Swal.fire(notification);
        },
        $ENTPN(number) {
            // return number
            number = number ? number : 0;
            let converted = persianJs(String(number)).englishNumber();
            if (converted == "undefined") return "۰";
            else return converted;
        }
    }
};
