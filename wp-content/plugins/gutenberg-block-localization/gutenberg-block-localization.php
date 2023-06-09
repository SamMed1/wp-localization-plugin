<?php
/**
 * Plugin Name:       Gutenberg Block Localization Plugin
 * Description:       Got a localized / internationalized website? Use this gutenberg block wrapper to display country-specific content blocks.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Sam Medhurst
 * License:           test-license
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-block-localization
 *
 * @package           gutenberg-block-localization
 */

$version = '1.0.0';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function gutenberg_block_localization_init() {

	// Register block.
	register_block_type(
		__DIR__ . '/localization-wrapper/build',
		array(
			'attributes'      => array(
				'title' => array(
					'default' => 'tailored protection™',
					'type'    => 'string',
				),
				'is_default_block' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale' => array(
					'type'    => 'string',
					'default' => '/ca/',
				),
				'block_locale_us_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ca_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ca_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_au_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_gb_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_nz_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_de_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fr_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fr_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ph_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_mx_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_mx_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_es_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_es_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_sg_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_it_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ch_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ch_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ch_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_nl_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_nl_nl' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_se_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_id_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_cl_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_cl_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_za_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ie_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_no_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_hk_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fi_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_at_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_jp_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_gr_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_pt_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_dk_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_cz_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_il_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fr_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_at_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_nl' => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
			'render_callback' => 'render_block_localization_wrapper',
		)
	);
}
add_action( 'init', 'gutenberg_block_localization_init' );

/**
 * Enqueue plugin js and css.
 */
function gbl_block_library_assets() {
	global $version;

	// Plugin shared scripts and styles.
	wp_enqueue_style( 'block-library-shared', plugin_dir_url( __FILE__ ) . '/assets/css/shared-css-compiled.css', array(), $version, false );
}
add_action( 'wp_enqueue_scripts', 'gbl_block_library_assets' );

/**
 * Enqueue styles to page editor as well.
 */
function gbl_custom_editor_styles() {
	wp_enqueue_style(
		'gbl-custom-editor-styles',
		plugin_dir_url( __FILE__ ) . '/assets/css/shared-css-compiled.css',
		array(),
		$version,
		false
	);
}
add_action( 'enqueue_block_editor_assets', 'gbl_custom_editor_styles' );

/**
 * Allow SVG MIME Type in Media Upload
 *
 * @param array $mimes Mime types keyed by the file extension regex corresponding to those types.
 */
function gbl_block_library_allow_svg( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'gbl_block_library_allow_svg' );

/**
 * Create new Gutenberg Block Category.
 */
function gbl_block_library_add_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'gbl-blocks',
				'title' => __( 'GBL Blocks', 'gbl blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'gbl_block_library_add_category', 10, 2 );

/**
 * Dynamic block render: Panel Dynamic.
 *
 * @param array $attributes Block attributes, defined in php, also in js at [block-name]/src/attributes.js.
 * @param array $content    Block content.
 */
function render_block_localization_wrapper( $attributes, $content ) {
	/**
	 * These variables have to match exactly the attributes set in the block attributes.js file.
	 */
	$att_title      = esc_html( $attributes['title'] );
	$att_is_default = esc_html( $attributes['is_default_block'] );
	$att_locale     = esc_html( $attributes['block_locale'] );

	$att_locale_us_en = esc_html( $attributes['block_locale_us_en'] );
	$att_locale_ca_en = esc_html( $attributes['block_locale_ca_en'] );
	$att_locale_ca_fr = esc_html( $attributes['block_locale_ca_fr'] );
	$att_locale_au_en = esc_html( $attributes['block_locale_au_en'] );
	$att_locale_gb_en = esc_html( $attributes['block_locale_gb_en'] );
	$att_locale_nz_en = esc_html( $attributes['block_locale_nz_en'] );
	$att_locale_de_de = esc_html( $attributes['block_locale_de_de'] );
	$att_locale_fr_fr = esc_html( $attributes['block_locale_fr_fr'] );
	$att_locale_fr_en = esc_html( $attributes['block_locale_fr_en'] );
	$att_locale_ph_en = esc_html( $attributes['block_locale_ph_en'] );
	$att_locale_mx_en = esc_html( $attributes['block_locale_mx_en'] );
	$att_locale_mx_es = esc_html( $attributes['block_locale_mx_es'] );
	$att_locale_es_en = esc_html( $attributes['block_locale_es_en'] );
	$att_locale_es_es = esc_html( $attributes['block_locale_es_es'] );
	$att_locale_sg_en = esc_html( $attributes['block_locale_sg_en'] );
	$att_locale_it_en = esc_html( $attributes['block_locale_it_en'] );
	$att_locale_ch_en = esc_html( $attributes['block_locale_ch_en'] );
	$att_locale_ch_fr = esc_html( $attributes['block_locale_ch_fr'] );
	$att_locale_ch_de = esc_html( $attributes['block_locale_ch_de'] );
	$att_locale_nl_en = esc_html( $attributes['block_locale_nl_en'] );
	$att_locale_nl_nl = esc_html( $attributes['block_locale_nl_nl'] );
	$att_locale_se_en = esc_html( $attributes['block_locale_se_en'] );
	$att_locale_be_en = esc_html( $attributes['block_locale_be_en'] );
	$att_locale_be_fr = esc_html( $attributes['block_locale_be_fr'] );
	$att_locale_id_en = esc_html( $attributes['block_locale_id_en'] );
	$att_locale_cl_es = esc_html( $attributes['block_locale_cl_es'] );
	$att_locale_cl_en = esc_html( $attributes['block_locale_cl_en'] );
	$att_locale_za_en = esc_html( $attributes['block_locale_za_en'] );
	$att_locale_ie_en = esc_html( $attributes['block_locale_ie_en'] );
	$att_locale_no_es = esc_html( $attributes['block_locale_no_es'] );
	$att_locale_hk_en = esc_html( $attributes['block_locale_hk_en'] );
	$att_locale_fi_en = esc_html( $attributes['block_locale_fi_en'] );
	$att_locale_at_en = esc_html( $attributes['block_locale_at_en'] );
	$att_locale_jp_en = esc_html( $attributes['block_locale_jp_en'] );
	$att_locale_gr_en = esc_html( $attributes['block_locale_gr_en'] );
	$att_locale_pt_en = esc_html( $attributes['block_locale_pt_en'] );
	$att_locale_dk_en = esc_html( $attributes['block_locale_dk_en'] );
	$att_locale_cz_en = esc_html( $attributes['block_locale_cz_en'] );
	$att_locale_il_en = esc_html( $attributes['block_locale_il_en'] );
	$att_locale_fr_fr = esc_html( $attributes['block_locale_fr_fr'] );
	$att_locale_at_de = esc_html( $attributes['block_locale_at_de'] );
	$att_locale_be_de = esc_html( $attributes['block_locale_be_de'] );
	$att_locale_be_nl = esc_html( $attributes['block_locale_be_nl'] );

	// First set our codes to equal nothing.
	$att_locale_us_en_code = '';
	$att_locale_ca_en_code = '';
	$att_locale_ca_fr_code = '';
	$att_locale_au_en_code = '';
	$att_locale_gb_en_code = '';
	$att_locale_nz_en_code = '';
	$att_locale_de_de_code = '';
	$att_locale_fr_fr_code = '';
	$att_locale_fr_en_code = '';
	$att_locale_ph_en_code = '';
	$att_locale_mx_en_code = '';
	$att_locale_mx_es_code = '';
	$att_locale_es_en_code = '';
	$att_locale_es_es_code = '';
	$att_locale_sg_en_code = '';
	$att_locale_it_en_code = '';
	$att_locale_ch_en_code = '';
	$att_locale_ch_fr_code = '';
	$att_locale_ch_de_code = '';
	$att_locale_nl_en_code = '';
	$att_locale_nl_nl_code = '';
	$att_locale_se_en_code = '';
	$att_locale_be_en_code = '';
	$att_locale_be_fr_code = '';
	$att_locale_id_en_code = '';
	$att_locale_cl_es_code = '';
	$att_locale_cl_en_code = '';
	$att_locale_za_en_code = '';
	$att_locale_ie_en_code = '';
	$att_locale_no_es_code = '';
	$att_locale_hk_en_code = '';
	$att_locale_fi_en_code = '';
	$att_locale_at_en_code = '';
	$att_locale_jp_en_code = '';
	$att_locale_gr_en_code = '';
	$att_locale_pt_en_code = '';
	$att_locale_dk_en_code = '';
	$att_locale_cz_en_code = '';
	$att_locale_il_en_code = '';
	$att_locale_fr_fr_code = '';
	$att_locale_at_de_code = '';
	$att_locale_be_de_code = '';
	$att_locale_be_nl_code = '';

	// Assign a locale value if a country was assigned to the block via the UI.
	if ( 1 == $att_locale_us_en ) {
		$att_locale_us_en_code = '/us/en';
	}
	if ( 1 == $att_locale_ca_en ) {
		$att_locale_ca_en_code = '/ca/en';
	}
	if ( 1 == $att_locale_ca_fr ) {
		$att_locale_ca_fr_code = '/ca/fr';
	}
	if ( 1 == $att_locale_au_en ) {
		$att_locale_au_en_code = '/au/en';
	}
	if ( 1 == $att_locale_gb_en ) {
		$att_locale_gb_en_code = '/gb/en';
	}
	if ( 1 == $att_locale_nz_en ) {
		$att_locale_nz_en_code = '/nz/en';
	}
	if ( 1 == $att_locale_de_de ) {
		$att_locale_de_de_code = '/de/de';
	}
	if ( 1 == $att_locale_fr_fr ) {
		$att_locale_fr_fr_code = '/fr/fr';
	}
	if ( 1 == $att_locale_fr_en ) {
		$att_locale_fr_en_code = '/fr/en';
	}
	if ( 1 == $att_locale_ph_en ) {
		$att_locale_ph_en_code = '/ph/en';
	}
	if ( 1 == $att_locale_mx_en ) {
		$att_locale_mx_en_code = '/mx/en';
	}
	if ( 1 == $att_locale_mx_es ) {
		$att_locale_mx_es_code = '/mx/es';
	}
	if ( 1 == $att_locale_es_en ) {
		$att_locale_es_en_code = '/es/en';
	}
	if ( 1 == $att_locale_es_es ) {
		$att_locale_es_es_code = '/es/es';
	}
	if ( 1 == $att_locale_sg_en ) {
		$att_locale_sg_en_code = '/sg/en';
	}
	if ( 1 == $att_locale_it_en ) {
		$att_locale_it_en_code = '/it/en';
	}
	if ( 1 == $att_locale_ch_en ) {
		$att_locale_ch_en_code = '/ch/en';
	}
	if ( 1 == $att_locale_ch_fr ) {
		$att_locale_ch_fr_code = '/ch/fr';
	}
	if ( 1 == $att_locale_ch_de ) {
		$att_locale_ch_de_code = '/ch/de';
	}
	if ( 1 == $att_locale_nl_en ) {
		$att_locale_nl_en_code = '/nl/en';
	}
	if ( 1 == $att_locale_nl_nl ) {
		$att_locale_nl_nl_code = '/nl/nl';
	}
	if ( 1 == $att_locale_se_en ) {
		$att_locale_se_en_code = '/se/en';
	}
	if ( 1 == $att_locale_be_en ) {
		$att_locale_be_en_code = '/be/en';
	}
	if ( 1 == $att_locale_be_fr ) {
		$att_locale_be_fr_code = '/be/fr';
	}
	if ( 1 == $att_locale_id_en ) {
		$att_locale_id_en_code = '/id/en';
	}
	if ( 1 == $att_locale_cl_es ) {
		$att_locale_cl_es_code = '/cl/es';
	}
	if ( 1 == $att_locale_cl_en ) {
		$att_locale_cl_en_code = '/cl/en';
	}
	if ( 1 == $att_locale_za_en ) {
		$att_locale_za_en_code = '/za/en';
	}
	if ( 1 == $att_locale_ie_en ) {
		$att_locale_ie_en_code = '/ie/en';
	}
	if ( 1 == $att_locale_no_es ) {
		$att_locale_no_es_code = '/no/es';
	}
	if ( 1 == $att_locale_hk_en ) {
		$att_locale_hk_en_code = '/hk/en';
	}
	if ( 1 == $att_locale_fi_en ) {
		$att_locale_fi_en_code = '/fi/en';
	}
	if ( 1 == $att_locale_at_en ) {
		$att_locale_at_en_code = '/at/en';
	}
	if ( 1 == $att_locale_jp_en ) {
		$att_locale_jp_en_code = '/jp/en';
	}
	if ( 1 == $att_locale_gr_en ) {
		$att_locale_gr_en_code = '/gr/en';
	}
	if ( 1 == $att_locale_pt_en ) {
		$att_locale_pt_en_code = '/pt/en';
	}
	if ( 1 == $att_locale_dk_en ) {
		$att_locale_dk_en_code = '/dk/en';
	}
	if ( 1 == $att_locale_cz_en ) {
		$att_locale_cz_en_code = '/cz/en';
	}
	if ( 1 == $att_locale_il_en ) {
		$att_locale_il_en_code = '/il/en';
	}
	if ( 1 == $att_locale_fr_fr ) {
		$att_locale_fr_fr_code = '/fr/fr';
	}
	if ( 1 == $att_locale_at_de ) {
		$att_locale_at_de_code = '/at/de';
	}
	if ( 1 == $att_locale_be_de ) {
		$att_locale_be_de_code = '/be/de';
	}
	if ( 1 == $att_locale_be_nl ) {
		$att_locale_be_nl_code = '/be/nl';
	}

	// Create our array of terms which will be used to search the URL.
	$search = array(
		$att_locale_us_en_code,
		$att_locale_ca_en_code,
		$att_locale_ca_fr_code,
		$att_locale_au_en_code,
		$att_locale_gb_en_code,
		$att_locale_nz_en_code,
		$att_locale_de_de_code,
		$att_locale_fr_fr_code,
		$att_locale_fr_en_code,
		$att_locale_ph_en_code,
		$att_locale_mx_en_code,
		$att_locale_mx_es_code,
		$att_locale_es_en_code,
		$att_locale_es_es_code,
		$att_locale_sg_en_code,
		$att_locale_it_en_code,
		$att_locale_ch_en_code,
		$att_locale_ch_fr_code,
		$att_locale_ch_de_code,
		$att_locale_nl_en_code,
		$att_locale_nl_nl_code,
		$att_locale_se_en_code,
		$att_locale_be_en_code,
		$att_locale_be_fr_code,
		$att_locale_id_en_code,
		$att_locale_cl_es_code,
		$att_locale_cl_en_code,
		$att_locale_za_en_code,
		$att_locale_ie_en_code,
		$att_locale_no_es_code,
		$att_locale_hk_en_code,
		$att_locale_fi_en_code,
		$att_locale_at_en_code,
		$att_locale_jp_en_code,
		$att_locale_gr_en_code,
		$att_locale_pt_en_code,
		$att_locale_dk_en_code,
		$att_locale_cz_en_code,
		$att_locale_il_en_code,
		$att_locale_fr_fr_code,
		$att_locale_at_de_code,
		$att_locale_be_de_code,
		$att_locale_be_nl_code,
	);

	$home_url = home_url();

	// Block title sanitization.
	$title              = strtolower( $att_title );
	$title_sanitize     = str_replace( ' ', '_', $title );
	$title_sanitize_sec = str_replace( '™', '', $title_sanitize );

	/**
	 * This is the HTML that is returned to the front end.
	 */
	$html = $content;

	$current_url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

	$match = ( str_replace( $search, '', $current_url ) != $current_url );

	if ( 1 == $att_is_default ) {
		if ( true == $match ) {
			return;
		} else {
			return $html;
		}
	} else {
		if ( ! array_filter( $search ) ) {
			return $html;
		} else {
			if ( true == $match ) {
				return $html;
			} else {
				return;
			}
		}
	}

}
