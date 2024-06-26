var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const display_notifications = (messages, type, selector) => {

    let html = '';
    type = type == 'error' ? 'danger' : type;

    for(let message of messages) {

        html += `
            <div class="alert alert-${type} animated fadeIn">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                ${message}
            </div>`;

    }

    $(selector).html(html);

};

const fade_out_redirect = ({ url = false, selector = 'body', wait_time = 70, full = false }) => {

    /* Get the base url */
    let base_url = $('#url').val();

    /* Redirect link */
    let redirect_url = full ? url : `${base_url}${url}`;

    setTimeout(() => {
        $(selector).fadeOut(() => {
            $(selector).html('<div class="vw-100 vh-100 d-flex align-items-center"><div class="col-2 text-center mx-auto" style="width: 3rem; height: 3rem;"><div class="spinner-grow"><span class="sr-only">Loading...</span></div></div></div>').show();
        });

        setTimeout(() => window.location.href = redirect_url, 100)
    }, wait_time)

};

const redirect = (url, full = false) => {
    /* Get the base url */
    let base_url = $('#url').val();

    window.location.href = full ? url : `${base_url}${url}`;
};

const ajax_call_helper = (event, controller, request_type, success_callback = () => {}) => {
    let row_id = $(event.currentTarget).data('row-id');
    let global_token = $('input[name="global_token"]').val();

    let data = {
        global_token,
        request_type
    };

    switch(controller) {
        case 'project-ajax':
            data.project_id = row_id;
            break;

        case 'link-ajax':
            data.link_id = row_id;
            break;

        default:
            data.id = row_id;
    }

    $.ajax({
        type: 'POST',
        url: controller,
        data: data,
        success: (data) => {
            if(data.status == 'error') {
                alert(data.message[0]);
            }

            else if(data.status == 'success') {

                success_callback(event, data);

            }
        },
        dataType: 'json'
    });

    event.preventDefault();
};

const number_format = (number, decimals, dec_point = '.', thousands_point = ',') => {

    if (number == null || !isFinite(number)) {
        throw new TypeError('number is not valid');
    }

    if(!decimals) {
        let len = number.toString().split('.').length;
        decimals = len > 1 ? len : 0;
    }

    number = parseFloat(number).toFixed(decimals);

    number = number.replace('.', dec_point);

    let splitNum = number.split(dec_point);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
    number = splitNum.join(dec_point);

    return number;
};

const nr = (number, decimals = 0) => {

    let decimal_point = $('[name="number_decimal_point"]').val();
    let thousands_separator = $('[name="number_thousands_separator"]').val();

    return number_format(number, decimals, decimal_point, thousands_separator);
};

const get_random_color = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


}