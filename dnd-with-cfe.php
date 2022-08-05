<?php 
/**
 * Plugin Name:       CFE Drag And Drop
 * Description:       drag and drop
 * Version:           1.0.0
 * Author:            Themehigh
 * Text Domain:       react-in-wp
 *
 */

add_action( 'admin_menu', 'admin_menu' );
add_action('admin_enqueue_scripts', 'enqueue_custom_scripts');
add_action('wp_ajax_saved_setting_data', 'ajax_settings_save_function');

function admin_menu(){
    add_menu_page( 'Dnd Menu', 'Dnd Menu', 'manage_options', 'wp-react', 'render_page', ' dashicons-clipboard', 10 );
}
function render_page(){

    $php_variable = get_option('thwcfe_sections') ? get_option('thwcfe_sections') : '';

    ?>
    <div class="wrapper">
        <h2>React Contents</h2>
        <div id="react_contents">
            <script type="text/javascript">
                var ful_obj = <?php echo json_encode($php_variable);?>
            </script>
        </div>
    </div>
    <?php
}


function enqueue_custom_scripts($hook) {
    if ($hook != 'toplevel_page_wp-react') {
       return;
    }

    $settings =  get_option('wcfe_saved_data');
    $settings = isset($settings) ? $settings : '';

    wp_enqueue_script( 'react-admin-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-element'), '1.0.0', true );
    wp_enqueue_style ('styles', plugins_url('wcfe-drag-and-drop/src/style.css', dirname(__FILE__)), array(), '1.0.0');

    $settings_data = array(
            'ajaxurl'           => admin_url( 'admin-ajax.php' ),
            'saved_data'        => $settings,
        );

    wp_localize_script('react-admin-script', 'saved_settings', $settings_data);
}

// function for saving the settings.
function ajax_settings_save_function(){
    if (isset($_POST['savedData'])) {
        $new_form_data =  $_POST['savedData'];
        $saved_datas =  get_option('wcfe_saved_data');
        // write_log($saved_datas);
        // write_log($saved_datas['additional']->sectionFields);
        
        $which_section_update = $new_form_data['currentTab'][0] ? $new_form_data['currentTab'][0] : '';
        $which_section_data = $new_form_data['updateSection'] ? $new_form_data['updateSection'] : '';
        
        // in the case of first attempt of the user.
        if (empty($saved_datas)) { 
           $cfe_data = get_option('thwcfe_sections'); 
           $select_the_section = $cfe_data[$which_section_update];
           $select_the_section->sectionFields = $which_section_data['sectionFields'];
           $select_the_section->fields = $which_section_data['fields'];

       }else{
        // in the case of existing user.
           $cfe_data =  get_option('wcfe_saved_data');

           $select_the_section = $cfe_data[$which_section_update];
           $select_the_section->sectionFields = $which_section_data['sectionFields'];
           $select_the_section->fields = $which_section_data['fields'];
       }
       
       update_option('wcfe_saved_data', $cfe_data);
   }
}
?>