<?php
/*
Plugin Name: Smartpik
Plugin URI: http://smartpik.com
Description: Smartpik Plugin
Author: Smartpik
Version: 1.0.0
Author URI: http://smartpik.com
*/

function add_my_scripts ( ) {
  wp_enqueue_script('my-js', WP_PLUGIN_URL . '/smartpik/js/smartpik.js', array('jquery'));
}

add_action('wp_print_scripts', 'add_my_scripts');

?>