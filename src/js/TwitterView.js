import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/TwitterView.css';

class TwitterView extends Component {
  render() {
    return (
      <div styleName="twitter-container">
      <li styleName="stream-item stream-item
" data-item-id="860595796252741632" id="stream-item-tweet-860595796252741632" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;860595796252741632&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">



  <div styleName="tweet

       has-content
" data-tweet-id="860595796252741632" data-item-id="860595796252741632" data-permalink-path="/NASAAero/status/860595796252741632" data-conversation-id="860595796252741632" data-tweet-nonce="860595796252741632-060edaad-780d-4c5d-9354-a84bdb84fcd9" data-tweet-stat-initialized="true" data-screen-name="NASAAero" data-name="NASA Aeronautics" data-user-id="2734381938" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;2734381938&quot;,&quot;screen_name&quot;:&quot;NASAAero&quot;,&quot;name&quot;:&quot;NASA Aeronautics&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;NASA Aeronautics&quot;,&quot;emojified_text_as_html&quot;:&quot;NASA Aeronautics&quot;}}]" data-disclosure-type="" data-has-cards="true">

    <div styleName="context">


    </div>

    <div styleName="content">





      <div styleName="stream-item-header">
          <a styleName="account-group" href={this.props.profileLink} data-user-id="2734381938">
    <img styleName="avatar" src={this.props.profileImage} alt="" />
    <span>
      <strong styleName="fullname" data-aria-label-part="">{this.props.name}</strong><span>‏</span><span styleName="UserBadges"><span styleName="Icon Icon--verified"><span styleName="u-hiddenVisually">Cuenta verificada</span></span></span><span>&nbsp;</span></span><span styleName="username u-dir" dir="ltr" data-aria-label-part="">@<b>{this.props.username}</b></span></a>


        <small styleName="time">
  <a href="/NASAAero/status/860595796252741632" styleName="tweet-timestamp" title="13:43 - 5 may. 2017" data-conversation-id="860595796252741632"><span data-time="1494017001" data-time-ms="1494017001000" data-long-form="true" aria-hidden="true">{this.props.createdAt}</span><span styleName="u-hiddenVisually" data-aria-label-part="last">Hace 18 horas</span></a>
</small>

          <div styleName="ProfileTweet-action ProfileTweet-action--more">
    <div styleName="dropdown">
  <button styleName="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle" type="button">
      <div styleName="IconContainer" title="Más">
        <span styleName="Icon Icon--caretDownLight Icon--smallest"></span>
        <span styleName="u-hiddenVisually">Más</span>
      </div>
  </button>
  <div styleName="dropdown-menu is-autoCentered">
  <div styleName="dropdown-caret">
    <div styleName="caret-outer"></div>
    <div styleName="caret-inner"></div>
  </div>
  <ul>

      <li>
        <button type="button" styleName="dropdown-link">Copiar enlace del Tweet</button>
      </li>
      <li data-nav="embed_tweet">
        <button type="button" styleName="dropdown-link">Insertar Tweet</button>
      </li>
  </ul>
</div>
</div>
  </div>

      </div>





        <div>
  <p styleName="TweetTextSize TweetTextSize--normal" lang="en" data-aria-label-part="0">{this.props.text} <a href="https://t.co/Ukdu1ZzMrE" rel="nofollow noopener" dir="ltr" data-expanded-url="https://go.nasa.gov/2pigjd4" target="_blank" title="https://go.nasa.gov/2pigjd4"><span></span><span styleName="invisible">https://</span><span>go.nasa.gov/2pigjd4</span><span styleName="invisible"></span><span><span styleName="invisible">&nbsp;</span></span></a><a href="https://t.co/zrB4oY96VZ" styleName="u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/zrB4oY96VZ</a></p>
</div>





            <div styleName="AdaptiveMediaOuterContainer">
    <div styleName="AdaptiveMedia


        is-square



        ">
      <div>
          <div styleName="AdaptiveMedia-singlePhoto">
    <div styleName="AdaptiveMedia-photoContainer" data-image-url="https://pbs.twimg.com/media/C_FzSfGXcAIbNQ9.jpg" data-element-context="platform_photo_card">
  <img data-aria-label-part="" src="https://pbs.twimg.com/media/C_FzSfGXcAIbNQ9.jpg" alt="" style={{width: '100%', top: '-0px'}} />
</div>


</div>


      </div>
    </div>
  </div>








      <div styleName="stream-item-footer">

      <div styleName="u-hiddenVisually">


    <span styleName="ProfileTweet-action--reply u-hiddenVisually">
      <span styleName="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
        <span>0 respuestas</span>
      </span>
    </span>
    <span styleName="ProfileTweet-action--retweet u-hiddenVisually">
      <span styleName="ProfileTweet-actionCount" data-tweet-stat-count="3">
        <span data-aria-label-part="">3 retweets</span>
      </span>
    </span>
    <span styleName="ProfileTweet-action--favorite u-hiddenVisually">
      <span styleName="ProfileTweet-actionCount" data-tweet-stat-count="5">
        <span data-aria-label-part="">5 Me gusta</span>
      </span>
    </span>
  </div>

  <div styleName="ProfileTweet-actionList" role="group" aria-label="Acciones del Tweet">
    <div styleName="ProfileTweet-action ProfileTweet-action--reply">
  <button styleName="ProfileTweet-actionButton" data-modal="ProfileTweet-reply" type="button">
    <div styleName="IconContainer" title="Responder">
      <span styleName="Icon Icon--reply"></span>
      <span styleName="u-hiddenVisually">Responder</span>
    </div>
      <div styleName="IconTextContainer">
        <span styleName="ProfileTweet-actionCount ProfileTweet-actionCount--isZero ">
          <span aria-hidden="true"></span>
        </span>
      </div>
  </button>
</div>
    <div styleName="ProfileTweet-action ProfileTweet-action--retweet">
  <button styleName="ProfileTweet-actionButton" data-modal="ProfileTweet-retweet" type="button">
    <div styleName="IconContainer" title="Retwittear">
      <span styleName="Icon Icon--retweet"></span>
      <span styleName="u-hiddenVisually">Retwittear</span>
    </div>
      <div styleName="IconTextContainer">
        <span styleName="ProfileTweet-actionCount">
          <span aria-hidden="true">3</span>
        </span>
      </div>
  </button><button styleName="ProfileTweet-actionButtonUndo" data-modal="ProfileTweet-retweet" type="button">
    <div styleName="IconContainer" title="Deshacer Retweet">
      <span styleName="Icon Icon--retweet"></span>
      <span styleName="u-hiddenVisually">Retwitteado</span>
    </div>
      <div styleName="IconTextContainer">
        <span styleName="ProfileTweet-actionCount">
          <span aria-hidden="true">3</span>
        </span>
      </div>
  </button>
</div>

    <div styleName="ProfileTweet-action ProfileTweet-action--favorite">
  <button styleName="ProfileTweet-actionButton" type="button">
    <div styleName="IconContainer" title="Me gusta">
      <div styleName="HeartAnimationContainer">
        <div styleName="HeartAnimation"></div>
      </div>
      <span styleName="u-hiddenVisually">Me gusta</span>
    </div>
      <div styleName="IconTextContainer">
        <span styleName="ProfileTweet-actionCount">
          <span aria-hidden="true">5</span>
        </span>
      </div>
  </button><button styleName="ProfileTweet-actionButtonUndo u-linkClean" type="button">
    <div styleName="IconContainer" title="Deshacer me gusta">
      <div styleName="HeartAnimationContainer">
        <div styleName="HeartAnimation"></div>
      </div>
      <span styleName="u-hiddenVisually">Gustado</span>
    </div>
      <div styleName="IconTextContainer">
        <span styleName="ProfileTweet-actionCount">
          <span aria-hidden="true">5</span>
        </span>
      </div>
  </button>
</div>





  </div>

</div>







    </div>
  </div>



</li>
</div>
    );
  }
}

export default CSSModules(TwitterView, styles, {allowMultiple:true});
