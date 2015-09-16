<?php get_template_part('templates/page', 'header'); ?>

<?php if (!have_posts()) : ?>
  <div class="alert alert-warning">
    <?php _e('Sorry, no results were found.', 'sage'); ?>
  </div>
  <?php get_search_form(); ?>
<?php endif; ?>

<?php
	// while (have_posts()) : the_post();
  // get_template_part('templates/content', get_post_type() != 'post' ? get_post_type() : get_post_format());
	//endwhile; 
?>
  <ul>
    <li ng-repeat='post in main.posts'><a href="{{ post.slug }}">{{ post.title }}</a></li>
  </ul>
<?php the_posts_navigation(); ?>
